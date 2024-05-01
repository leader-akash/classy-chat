import { create, SetState } from 'zustand';

interface ConversationState {
  selectedConversation: any; // Define the type of selectedConversation
  setSelectedConversation: (selectedConversation: any) => void;
  messages: any[]; // Define the type of messages
  setMessages: (messages: any[]) => void;
}

const useConversation = create<ConversationState>((set: SetState<ConversationState>) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: any) => set({ selectedConversation }),

  messages: [],
  setMessages: (messages: any[]) => set({ messages })
}));

export default useConversation;