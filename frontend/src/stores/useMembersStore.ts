import { create } from 'zustand';
import axios from '@/api';
import { MemberType } from '@/types';
import { isObjEmpty, isObjValuesExist } from '@/utils/utility.utils';

interface FilterData {
  id: string;
  role: string;
  season: string;
  year: number;
}

interface IState {
  members: MemberType[];
  membersDictionary: MemberType[];
  getMembers: (filters?: Partial<FilterData>) => Promise<void>;
  addMember: (newMember: Omit<MemberType, '_id'>) => Promise<void>;
  appliedFilters: Partial<FilterData>;
}

const useMembersStore = create<IState>((set) => ({
  members: [],
  membersDictionary: [],
  appliedFilters: {},
  loading: false,
  error: null,

  getMembers: async (filters) => {
    try {
      const response = await axios.get(`/members`, { params: filters });

      if (filters && !isObjEmpty(filters) && isObjValuesExist(filters)) {
        set({ appliedFilters: filters });
        return set({ members: response.data });
      }

      set({ appliedFilters: {} });
      set({ members: response.data, membersDictionary: response.data });
    } catch (error) {
      throw error;
    }
  },

  addMember: async (newMember) => {
    try {
      const response = await axios.post(`/members`, newMember);
      set((state) => ({ members: [...state.members, response.data] }));
    } catch (error) {
      throw error;
    }
  },
}));

export default useMembersStore;