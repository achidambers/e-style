import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Fundraiser {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  goal: number;
  raised: number;
  donors: number;
  category: string;
  status: string;
  created_at: string;
  user_id: string;
  profiles?: {
    display_name: string | null;
  } | null;
}

export const useFundraisers = () => {
  return useQuery({
    queryKey: ["fundraisers"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("fundraisers")
        .select(`
          *,
          profiles (
            display_name
          )
        `)
        .eq("status", "active")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      return data;
    },
  });
};