import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiPlaystation2, SiPlaystation3 } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";

import { Platforms } from "../hooks/UseGames";
import { IconType } from "react-icons";
import { color } from "framer-motion";

interface Props {
  platforms: Platforms[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    PC: FaWindows,
    PSP: FaPlaystation,
    PS1: FaPlaystation,
    PS2: SiPlaystation2,
    PS3: SiPlaystation3,
    XBOX: FaXbox,
    GCN: SiNintendo,
    NES: SiNintendo,
    Wii: SiNintendo,
    MAC: FaApple,
    IPHN: MdPhoneIphone,
  };
  if (!platforms) return null;
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
