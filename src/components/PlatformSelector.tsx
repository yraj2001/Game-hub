import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import UsePlatforms from "../hooks/UsePlatforms";

const PlatformSelector = () => {
  const { data, error } = UsePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>

      <MenuList>
        {data.map((paltform) => (
          <MenuItem key={paltform.id}>{paltform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
