/*
 * @Author: Matroid_Walker adimensioner@gmail.com
 * @Date: 2024-09-17 20:40:26
 * @LastEditors: Matroid_Walker adimensioner@gmail.com
 * @LastEditTime: 2024-09-18 15:25:17
 * @FilePath: /dev/docs/knowledge_base/theme.config.tsx
 * @Description:
 *
 * Copyright (c) 2024 by Terry Chang, All Rights Reserved.
 */
import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>COMP 4211 notes</span>,
  project: {
    link: "https://github.com/TianxingChang/knowledge_base",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/TianxingChang/knowledge_base",
  footer: {
    text: "Dash Studio",
  },
};

export default config;
