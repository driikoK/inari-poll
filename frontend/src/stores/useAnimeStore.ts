import { create } from 'zustand';
import axios from '@/api';

interface IAnime {
  _id: string;
  name: string;
}

interface IState {
  animeNames: IAnime[];
  getAnime: () => Promise<void>;
  addAnime: (newAnime: string) => Promise<void>;
}

const useAnimeStore = create<IState>((set) => ({
  animeNames: [],

  getAnime: async () => {
    try {
      const response = await axios.get(`/team-animes`);
      set({ animeNames: response.data });
    } catch (error) {
      throw error;
    }
  },
  addAnime: async (newAnime: string) => {
    try {
      const response = await axios.post(`/team-animes`, { name: newAnime });
      set((state) => ({ animeNames: [...state.animeNames, response.data] }));
    } catch (error) {
      throw error;
    }
  },
}));

export default useAnimeStore;
