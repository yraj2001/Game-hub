import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";

import { Platform } from "../hooks/UseGames";
import { IconType } from "react-icons";
import { color } from "framer-motion";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    PC: FaWindows,
    PSP: FaPlaystation,
    PS1: FaPlaystation,
    PS2: FaPlaystation,
    PS3: FaPlaystation,
    XBOX: FaXbox,
    GCN: SiNintendo,
    NES: SiNintendo,
    Wii: SiNintendo,
    MAC: FaApple,
    IPHN: MdPhoneIphone,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.abbreviation];
        return IconComponent ? (
          <Icon as={IconComponent} key={platform.id} color="gray.500" />
        ) : (
          <Icon as={BsGlobe} key={platform.id} color="gray.500" />
        ); // Return null if no matching icon
      })}
    </HStack>
  );
};

export default PlatformIconList;

// {api_detail_url: 'https://www.giantbomb.com/api/platform/3045-3/', id: 3, name: 'Game Boy', site_detail_url: 'https://www.giantbomb.com/game-boy/3045-3/', abbreviation: 'GB'}

// {api_detail_url: 'https://www.giantbomb.com/api/platform/3045-4/', id: 4, name: 'Game Boy Advance', site_detail_url: 'https://www.giantbomb.com/game-boy-advance/3045-4/', abbreviation: 'GBA'}

// {api_detail_url: 'https://www.giantbomb.com/api/platform/3045-5/', id: 5, name: 'Game Gear', site_detail_url: 'https://www.giantbomb.com/game-gear/3045-5/', abbreviation: 'GG'}

// {api_detail_url: 'https://www.giantbomb.com/api/platform/3045-6/', id: 6, name: 'Genesis', site_detail_url: 'https://www.giantbomb.com/genesis/3045-6/', abbreviation: 'GEN'}

// {api_detail_url: 'https://www.giantbomb.com/api/platform/3045-7/', id: 7, name: 'Atari Lynx', site_detail_url: 'https://www.giantbomb.com/atari-lynx/3045-7/', abbreviation: 'LYNX'}

// {api_detail_url: 'https://www.giantbomb.com/api/platform/3045-8/', id: 8, name: 'Sega Master System', site_detail_url: 'https://www.giantbomb.com/sega-master-system/3045-8/', abbreviation: 'SMS'}

// {api_detail_url: 'https://www.giantbomb.com/api/platform/3045-9/', id: 9, name: 'Super Nintendo Entertainment System', site_detail_url: 'https://www.giantbomb.com/super-nintendo-entertainment-system/3045-9/', abbreviation: 'SNES'}
