
import React, { useState, useRef, useEffect } from 'react';
import Section from './shared/Section';
import { askAIAboutPortfolio } from '../services/geminiService';
import type { Message } from '../types';
import { BotIcon } from './icons/BotIcon';
import { UserIcon } from './icons/UserIcon';
import { SendIcon } from './icons/SendIcon';
import { PERSONAL_DATA } from '../constants';
import { LinkedinIcon } from './icons/LinkedinIcon';

const Contact: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'bot', text: `Hello! I'm ${PERSONAL_DATA.name.split(' ')[0]}'s AI assistant. Feel free to ask me anything about her skills, projects, or achievements.` }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const aiResponse = await askAIAboutPortfolio(input);

        const botMessage: Message = { sender: 'bot', text: aiResponse };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
    };

    return (
        <Section id="contact">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                Get In <span className="text-purple-400">Touch</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                Have a question or want to work together? You can reach out via email, find me on social media, or ask my AI assistant below.
            </p>
            
            <div className="flex justify-center items-center gap-6 mb-12">
                <a href={`mailto:${PERSONAL_DATA.email}`} className="text-gray-300 hover:text-purple-400 transition-colors text-lg">{PERSONAL_DATA.email}</a>
                <div className="flex gap-4">
                    <a href={PERSONAL_DATA.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <LinkedinIcon className="w-7 h-7" />
                    </a>
                </div>
            </div>

            <div className="max-w-2xl mx-auto bg-[#1a1a1a] rounded-lg shadow-2xl shadow-purple-900/20 overflow-hidden">
                <div className="p-4 border-b border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-100">Ask My AI Assistant</h3>
                </div>
                <div className="p-4 h-80 overflow-y-auto bg-black/20">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 my-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                           {msg.sender === 'bot' && <BotIcon className="w-8 h-8 flex-shrink-0 text-purple-400" />}
                            <div className={`px-4 py-2 rounded-lg max-w-xs md:max-w-md break-words ${msg.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                                {msg.text}
                            </div>
                           {msg.sender === 'user' && <UserIcon className="w-8 h-8 flex-shrink-0 text-gray-400" />}
                        </div>
                    ))}
                    {isLoading && (
                       <div className="flex items-start gap-3 my-4 justify-start">
                           <BotIcon className="w-8 h-8 flex-shrink-0 text-purple-400" />
                           <div className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200">
                               <div className="flex items-center space-x-1">
                                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-0"></span>
                                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150"></span>
                                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></span>
                               </div>
                           </div>
                       </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700 flex items-center bg-[#1e1e1e]">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="e.g., Tell me about her awards"
                        className="flex-grow bg-transparent border-none text-gray-200 placeholder-gray-500 focus:ring-0"
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading || !input.trim()} className="ml-4 p-2 rounded-full bg-purple-600 text-white disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors">
                        <SendIcon className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </Section>
    );
};

export default Contact;