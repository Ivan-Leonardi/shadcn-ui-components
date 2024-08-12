"use client";

import { Member } from "@/types/member";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TeamCombobox } from "@/components/team/team-combobox";
import { useState } from "react";
type Props = {
  data: Member;
};

export const TeamItem = ({ data }: Props) => {
  const [role, setRole] = useState(data.role);

  return (
    <div className="flex items-center gap-4">
      <div>
        <Avatar>
          <AvatarImage src={data.avatar} />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1 overflow-x-hidden">
        <div className="truncate">{data.name}</div>
        <div className="truncate tex-sm text-muted-foreground">{data.email}</div>
      </div>
      <div>
        <TeamCombobox value={role} setValue={setRole} />
      </div>
    </div>
  );
};
