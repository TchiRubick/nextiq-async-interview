'use client'

import type { FC, ReactNode } from "react";
import { useLogout } from "@/app/auth/_hooks/useLogout";
import { Button } from "@/components/ui/button";

type tprops = {
  value: ReactNode
}

export const LogoutButton: FC<tprops> = (props) => {
  const { value } = props
  const logout = useLogout();

  return <Button onClick={logout}> {value} </Button>;
};
