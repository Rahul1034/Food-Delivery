import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://srmnslueldzndzhxhgjw.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNybW5zbHVlbGR6bmR6aHhoZ2p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyNDI2NzcsImV4cCI6MjAyOTgxODY3N30.0C5Kf9-Es4qrUEtADvrodvxnbvzyfIg1UGCfnRQrpCs"


export const supabase = createClient(supabaseUrl,supabaseAnonKey)