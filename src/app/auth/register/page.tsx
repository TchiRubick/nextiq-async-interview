import { SignInForm } from "./_componets/signInForm";
import { createClient } from "@/utils/supabase/server";
import type { UserRole } from "../_type";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui";

type InputR = {
  enum: UserRole
}

const Registration = () => {
  const supabase = createClient();

 

  return(
    <div className="flex justify-center items-center h-screen">
      <SignInForm/>
      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="recruiter">Recruiter</SelectItem>
              <SelectItem value="candidate">Candidate</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Registration;
