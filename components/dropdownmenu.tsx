
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    Link,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { useRouter } from 'next/navigation'
  
  export function DropdownMenuDemo() {
    const router = useRouter()
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon"><FontAwesomeIcon icon={faBars}  className="h-4 w-4" /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32 bg-white opacity-80">
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push('/')}>
          <span>Accueil</span>
          </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/service')}>
              <span>Nos Services</span>
            </DropdownMenuItem >
            <DropdownMenuItem onClick={() => router.push('/about')}>
              <span>A Propos</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/contact')}>
              <span>Contact</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  