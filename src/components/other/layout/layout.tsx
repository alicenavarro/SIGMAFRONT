import React, { FC, PropsWithChildren } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="cuerpo">
 <main>
        {children}
      </main>


    </div>

  );
};

export default Layout;