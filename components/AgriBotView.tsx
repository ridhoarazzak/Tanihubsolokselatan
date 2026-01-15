import React, { useState, useRef, useEffect } from 'react';
import { generateAgriAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Image as ImageIcon, Loader2, Sprout, X } from 'lucide-react';

const SUGGESTIONS = [
  "Cara mengatasi hama wereng?",
  "Pupuk terbaik untuk kopi?",
  "Cuaca Solok Selatan minggu ini?",
  "Harga cabe hari ini?",
];

const AgriBotView: React.FC = () => {
  const [input, setInput] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Halo! Saya AgriBot, asisten pertanian Solok Selatan. Silakan tanya tentang hama, pemupukan, atau upload foto tanaman Anda yang sakit.',
      timestamp: Date.now()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // Remove data URL prefix for API
        const base64Data = base64String.split(',')[1];
        setSelectedImage(base64Data);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if ((!textToSend.trim() && !selectedImage) || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend,
      image: selectedImage ? `data:image/jpeg;base64,${selectedImage}` : undefined,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    const imageToSend = selectedImage; // Store ref to send
    setSelectedImage(null); // Clear preview
    setIsLoading(true);

    try {
      const responseText = await generateAgriAdvice(userMessage.text, imageToSend || undefined);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-112px)] bg-gray-50">
      {/* Header Info */}
      <div className="bg-white p-3 border-b border-gray-200 shadow-sm flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
          <Sprout size={20} />
        </div>
        <div>
          <h2 className="text-sm font-bold text-gray-800">AgriBot Solok Selatan</h2>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-gray-500">Online • AI Powered</span>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
                msg.role === 'user'
                  ? 'bg-emerald-600 text-white rounded-br-none'
                  : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
              }`}
            >
              {msg.image && (
                <img 
                  src={msg.image} 
                  alt="Uploaded content" 
                  className="mb-3 rounded-lg w-full max-h-48 object-cover border border-white/20"
                />
              )}
              <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
              <span className={`text-[10px] mt-2 block ${msg.role === 'user' ? 'text-emerald-100' : 'text-gray-400'}`}>
                {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-bl-none p-4 shadow-sm border border-gray-100 flex items-center gap-2">
              <Loader2 size={16} className="animate-spin text-emerald-600" />
              <span className="text-xs text-gray-500">AgriBot sedang berpikir...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions & Input Area */}
      <div className="bg-white border-t border-gray-200">
         {/* Suggestion Chips */}
         {!isLoading && messages.length < 4 && (
          <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
            {SUGGESTIONS.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(suggestion)}
                className="whitespace-nowrap bg-emerald-50 text-emerald-700 text-xs px-3 py-1.5 rounded-full border border-emerald-100 hover:bg-emerald-100 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        {/* Input Controls */}
        <div className="p-3 pt-1">
          {selectedImage && (
            <div className="mb-2 relative inline-block">
              <img 
                src={`data:image/jpeg;base64,${selectedImage}`} 
                alt="Preview" 
                className="h-16 w-16 object-cover rounded-lg border border-gray-300" 
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 shadow-md"
              >
                <X size={12} />
              </button>
            </div>
          )}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="p-3 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
              title="Upload Foto Tanaman"
            >
              <ImageIcon size={20} />
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*"
              onChange={handleImageSelect}
            />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tanya soal tanaman..."
              className="flex-1 bg-gray-100 text-gray-800 text-sm rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              onClick={() => handleSend()}
              disabled={(!input.trim() && !selectedImage) || isLoading}
              className={`p-3 rounded-full shadow-md transition-all ${
                (!input.trim() && !selectedImage) || isLoading
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95'
              }`}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriBotView;