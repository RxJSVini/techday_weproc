import React from "react";
import { useTheme } from "styled-components";
import Header from "../Header";
import PostsList from "../PostsList";
import Footer from "../Footer";

export default function Layout({ onToggleTheme, selectedTheme }) {

  const theme = useTheme();

  return (
    <>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      <PostsList />
      <Footer nToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
    
      <div style={{
        marginTop:24,
        backgroundColor:theme.footerBackgroundColor,
        paddin:24,
      }}>

      </div>
    
    
    
    </>
  );
}
