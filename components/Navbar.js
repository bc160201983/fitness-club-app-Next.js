import React from "react";
import Link from "next/link";
import { Stack } from "@mui/material";
import Logo from "../public/assets/images/Logo.png";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link href="/">
        <img
          src={Logo.src}
          alt=""
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link href="/">
          <a
            href="#exercises"
            style={{
              textDecoration: "none",
              color: "#341212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </a>
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#341212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
