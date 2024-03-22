import { Outlet } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { Wrapper } from "./styled";

export const Layout = () => (
  <>
    <Header />
    <Wrapper>
      <Outlet />
    </Wrapper>
    <Footer />
  </>
);
