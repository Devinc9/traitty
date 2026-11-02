/* @ds-bundle: {"format":3,"namespace":"TraittyAIDesignSystem_019dcd","components":[],"sourceHashes":{"ui_kits/traitty-app/center.jsx":"e3af564783a8","ui_kits/traitty-app/parts.jsx":"6b5baae9cc8d","ui_kits/traitty-app/screens.jsx":"23982165367c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TraittyAIDesignSystem_019dcd = window.TraittyAIDesignSystem_019dcd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/traitty-app/center.jsx
try { (() => {
/* === CENTER COLUMNS === */

/* Empty state — hero sparkle, picker invitation */
const EmptyCenter = ({
  theme
}) => {
  const dark = theme === 'dark';
  const c = {
    title: dark ? '#F4F1FA' : '#111827',
    sub: dark ? 'rgba(244,241,250,0.65)' : '#6B7280',
    border: dark ? 'rgba(255,255,255,0.08)' : 'rgba(212,215,218,0.7)',
    chip: dark ? 'rgba(255,255,255,0.04)' : '#FFFFFF'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 40px',
      gap: 24,
      color: c.title
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 116,
      height: 116,
      borderRadius: 9999,
      background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.55)',
      border: `1px solid ${dark ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.9)'}`,
      backdropFilter: 'blur(20px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 0 60px rgba(140,109,238,0.30), inset 0 1px 0 rgba(255,255,255,0.08)' : '0 18px 40px -10px rgba(106,37,244,0.20), inset 0 1px 0 rgba(255,255,255,0.9)'
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    size: 64
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--t-font-zh)',
      fontWeight: 500,
      fontSize: 36,
      letterSpacing: '0.01em'
    }
  }, "\u4EBA\u624D\u89E3\u6790"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--t-font-zh)',
      fontSize: 15,
      color: c.sub,
      textAlign: 'center',
      maxWidth: 460,
      lineHeight: 1.7
    }
  }, "\u4E0A\u50B3\u5C65\u6B77\u3001\u8A0E\u8AD6\u9762\u8A66\u7D50\u679C\uFF0C\u6216\u627E\u5C0B\u7B26\u5408\u4F01\u696D\u6587\u5316\u7684\u4EBA\u9078\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 540,
      marginTop: 12,
      padding: '14px 18px',
      borderRadius: 22,
      background: dark ? 'rgba(255,255,255,0.04)' : '#fff',
      border: `1px solid ${c.border}`,
      boxShadow: dark ? 'none' : '0 8px 24px -10px rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'rgba(244,241,250,0.4)' : '#9CA3AF',
      fontSize: 14,
      fontFamily: 'var(--t-font-zh)'
    }
  }, "\u5411 Traitty \u8A62\u554F\u4EFB\u4F55\u4EBA\u624D\u76F8\u95DC\u554F\u984C..."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 14px',
      borderRadius: 9999,
      border: `1px solid ${c.border}`,
      background: c.chip,
      color: dark ? 'rgba(244,241,250,0.85)' : '#374151',
      fontSize: 12.5,
      fontFamily: 'var(--t-font-zh)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 13,
    stroke: 1.8
  }), /*#__PURE__*/React.createElement("span", null, "\u9078\u53D6\u4EBA\u624D"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 11,
    stroke: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 9999,
      background: 'linear-gradient(135deg,#6A25F4,#827AFE)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      boxShadow: '0 6px 18px rgba(106,37,244,0.35)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 16,
    stroke: 2.4
  })))), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: '8px 0 0',
      padding: 0,
      listStyle: 'none',
      maxWidth: 540,
      width: 540,
      fontSize: 13,
      fontFamily: 'var(--t-font-zh)',
      color: c.sub,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      lineHeight: 1.7
    }
  }, ['先在下方「選取人才」勾選想了解的人選', '點擊「開始分析」鎖定人選後即可進行對話', '使用右側「快速提問」探索常見的招募／管理面向'].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 18,
      height: 18,
      borderRadius: 9999,
      background: dark ? 'rgba(140,109,238,0.18)' : '#EDE9FE',
      color: dark ? '#C7BFFF' : '#5B19D9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      fontWeight: 700,
      fontFamily: 'Inter, sans-serif'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", null, t)))));
};

/* ─── Picker — list of candidates with checkboxes ─── */
const PickerCenter = ({
  theme
}) => {
  const dark = theme === 'dark';
  const c = {
    text: dark ? '#F4F1FA' : '#111827',
    sub: dark ? 'rgba(244,241,250,0.6)' : '#6B7280',
    border: dark ? 'rgba(255,255,255,0.08)' : 'rgba(212,215,218,0.8)',
    cardBg: dark ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
    selBg: dark ? 'rgba(140,109,238,0.12)' : '#F2EEFF',
    selBorder: dark ? 'rgba(167,139,250,0.4)' : 'rgba(106,37,244,0.35)'
  };
  const sel = ['eva', 'bob'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '40px 56px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--t-font-zh)',
      fontSize: 22,
      fontWeight: 600,
      color: c.text
    }
  }, "\u9078\u53D6\u4EBA\u624D"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: c.sub,
      fontFamily: 'var(--t-font-zh)'
    }
  }, "\u5DF2\u9078 2 / 5 \u4EBA")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '11px 16px',
      borderRadius: 14,
      background: c.cardBg,
      border: `1px solid ${c.border}`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: c.sub
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'rgba(244,241,250,0.4)' : '#9CA3AF',
      fontSize: 13.5,
      fontFamily: 'var(--t-font-zh)'
    }
  }, "\u641C\u5C0B\u5019\u9078\u4EBA\u59D3\u540D\u3001\u8077\u7A31\u6216\u6A19\u7C64")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, candidates.map(p => {
    const isSel = sel.includes(p.id);
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        borderRadius: 14,
        background: isSel ? c.selBg : c.cardBg,
        border: `1px solid ${isSel ? c.selBorder : c.border}`,
        fontFamily: 'var(--t-font-zh)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initial: p.init,
      color: p.av,
      text: p.tx,
      size: 32
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1.3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 14,
        color: c.text
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: c.sub
      }
    }, p.role, " \xB7 2024 \u52A0\u5165"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        padding: '3px 10px',
        borderRadius: 9999,
        background: dark ? 'rgba(255,255,255,0.06)' : '#F3F4F6',
        color: dark ? 'rgba(244,241,250,0.7)' : '#6B7280'
      }
    }, "\u5DF2\u5B8C\u6210\u6E2C\u8A55"), isSel ? /*#__PURE__*/React.createElement("div", {
      style: {
        width: 22,
        height: 22,
        borderRadius: 9999,
        background: 'linear-gradient(135deg,#6A25F4,#827AFE)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(106,37,244,0.35)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 13,
      color: "#fff",
      stroke: 3
    })) : /*#__PURE__*/React.createElement("div", {
      style: {
        width: 22,
        height: 22,
        borderRadius: 9999,
        border: `1.5px solid ${dark ? 'rgba(255,255,255,0.18)' : '#D4D7DA'}`
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      padding: '10px 22px',
      borderRadius: 9999,
      fontFamily: 'var(--t-font-zh)',
      background: 'transparent',
      color: c.sub,
      border: `1px solid ${c.border}`,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    style: {
      padding: '10px 26px',
      borderRadius: 9999,
      fontFamily: 'var(--t-font-zh)',
      background: 'linear-gradient(135deg,#6A25F4,#827AFE)',
      color: '#fff',
      border: 'none',
      fontSize: 13,
      fontWeight: 600,
      boxShadow: '0 8px 22px rgba(106,37,244,0.30)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    size: 14
  }), " \u958B\u59CB\u5206\u6790")));
};

/* ─── Chat — full conversation result ─── */
const ChatCenter = ({
  theme
}) => {
  const dark = theme === 'dark';
  const c = {
    text: dark ? '#F4F1FA' : '#111827',
    body: dark ? 'rgba(244,241,250,0.85)' : '#374151',
    sub: dark ? 'rgba(244,241,250,0.55)' : '#6B7280',
    border: dark ? 'rgba(255,255,255,0.08)' : 'rgba(212,215,218,0.8)',
    bubble: dark ? 'rgba(255,255,255,0.04)' : '#F8F7FE',
    cardBg: dark ? 'rgba(255,255,255,0.04)' : '#FFFFFF'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '28px 64px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 9999,
      background: dark ? 'rgba(255,255,255,0.04)' : '#fff',
      border: `1px solid ${c.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      boxShadow: dark ? 'none' : '0 1px 4px rgba(0,0,0,0.04)'
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      maxWidth: 580
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.12em',
      color: c.sub,
      fontFamily: 'Inter, sans-serif'
    }
  }, "TRAITTY AI"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--t-font-zh)',
      fontSize: 14,
      lineHeight: 1.75,
      color: c.body
    }
  }, "\u60A8\u597D\uFF01\u6211\u662F Traitty\uFF0C\u5C07\u70BA\u60A8\u63D0\u4F9B\u7279\u8CEA\u5206\u6790\u8207\u5EFA\u8B70\u3002\u5DF2\u9396\u5B9A ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: c.text
    }
  }, "2 \u4F4D\u5019\u9078\u4EBA"), "\u3002\u60A8\u73FE\u5728\u53EF\u4EE5\u91DD\u5C0D\u4ED6\u5011\u9032\u884C\u63D0\u554F\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      display: 'inline-flex',
      alignSelf: 'flex-start',
      alignItems: 'center',
      gap: 10,
      padding: '8px 14px',
      borderRadius: 9999,
      background: dark ? 'rgba(140,109,238,0.10)' : '#F2EEFF',
      border: `1px solid ${dark ? 'rgba(167,139,250,0.25)' : 'rgba(106,37,244,0.18)'}`,
      color: dark ? '#C7BFFF' : '#5B19D9',
      fontSize: 12.5,
      fontWeight: 600,
      fontFamily: 'var(--t-font-zh)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 12,
    stroke: 2
  }), "\u5DF2\u9396\u5B9A 2 \u4F4D\u4EBA\u9078", /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initial: "L",
    color: "#C7BFFF",
    text: "#5B19D9",
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: -6
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initial: "R",
    color: "#FFD8B8",
    text: "#A0522D",
    size: 20
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-end',
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px',
      borderRadius: 18,
      borderBottomRightRadius: 6,
      background: 'linear-gradient(135deg,#6A25F4,#827AFE)',
      color: '#fff',
      fontFamily: 'var(--t-font-zh)',
      fontSize: 14,
      fontWeight: 500,
      boxShadow: '0 8px 22px rgba(106,37,244,0.28)'
    }
  }, "\u5728\u5718\u968A\u5408\u4F5C\u4E2D\uFF0C\u4ED6\u5011\u5404\u81EA\u9069\u5408\u626E\u6F14\u4EC0\u9EBC\u89D2\u8272\uFF1F")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 9999,
      background: dark ? 'rgba(255,255,255,0.04)' : '#fff',
      border: `1px solid ${c.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 600,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.12em',
      color: c.sub,
      fontFamily: 'Inter, sans-serif'
    }
  }, "TRAITTY AI"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--t-font-zh)',
      fontSize: 14,
      lineHeight: 1.8,
      color: c.body
    }
  }, "\u6839\u64DA\u5169\u4F4D\u5019\u9078\u4EBA\u7684\u5FC3\u7406\u7279\u8CEA\u5206\u6790\uFF0C", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: c.text
    }
  }, "Lim \u8207 Roger"), " \u5728\u5718\u968A\u5408\u4F5C\u4E2D\u53EF\u5206\u5225\u9069\u5408\u4EE5\u4E0B\u89D2\u8272\u5B9A\u4F4D\uFF1A"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, [{
    p: candidates[0],
    tag: '統籌規劃者',
    body: '在「條理性」與「審慎」上表現出高度傾向，擅長制定流程與風險評估，適合擔任專案的節奏校準者。'
  }, {
    p: candidates[1],
    tag: '關係連結者',
    body: '在「外向性」與「同理心」上表現突出，能快速建立信任，適合作為跨團隊的溝通橋樑與客戶接觸點。'
  }].map(({
    p,
    tag,
    body
  }) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      padding: 16,
      borderRadius: 16,
      background: c.cardBg,
      border: `1px solid ${c.border}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      boxShadow: dark ? 'none' : '0 4px 18px -8px rgba(0,0,0,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initial: p.init,
    color: p.av,
    text: p.tx,
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: c.text,
      fontFamily: 'var(--t-font-zh)'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: c.sub,
      fontFamily: 'var(--t-font-zh)'
    }
  }, p.role))), /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      fontSize: 11,
      fontWeight: 700,
      padding: '3px 10px',
      borderRadius: 9999,
      background: dark ? 'rgba(140,109,238,0.18)' : '#EDE9FE',
      color: dark ? '#C7BFFF' : '#5B19D9',
      fontFamily: 'var(--t-font-zh)'
    }
  }, tag), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--t-font-zh)',
      fontSize: 13,
      lineHeight: 1.65,
      color: c.body
    }
  }, body)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--t-font-zh)',
      fontSize: 14,
      lineHeight: 1.8,
      color: c.body
    }
  }, "\u5EFA\u8B70\u5728\u914D\u7F6E\u6642\u8B93 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: c.text
    }
  }, "Lim"), " \u4E3B\u5C0E\u5167\u90E8\u6D41\u7A0B\u8A2D\u8A08\uFF0C", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: c.text
    }
  }, "Roger"), " \u8CA0\u8CAC\u5C0D\u5916\u5354\u8ABF\u8207\u95DC\u4FC2\u7DAD\u8B77\uFF0C\u80FD\u5728\u300C\u57F7\u884C\u529B\u300D\u8207\u300C\u5F48\u6027\u300D\u4E4B\u9593\u53D6\u5F97\u5E73\u8861\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 4,
      color: c.sub
    }
  }, ['copy', 'thumbs-up', 'thumbs-down', 'rotate'].map((n, i) => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: n,
    size: 15,
    stroke: 1.6,
    color: c.sub
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 64px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderRadius: 22,
      background: dark ? 'rgba(255,255,255,0.04)' : '#fff',
      border: `1px solid ${c.border}`,
      boxShadow: dark ? 'none' : '0 8px 24px -10px rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'rgba(244,241,250,0.4)' : '#9CA3AF',
      fontSize: 14,
      fontFamily: 'var(--t-font-zh)'
    }
  }, "\u5411 Traitty \u8A62\u554F\u4E0B\u4E00\u500B\u554F\u984C..."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 14px',
      borderRadius: 9999,
      border: `1px solid ${c.border}`,
      background: dark ? 'rgba(140,109,238,0.10)' : '#F2EEFF',
      color: dark ? '#C7BFFF' : '#5B19D9',
      fontSize: 12.5,
      fontFamily: 'var(--t-font-zh)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 12,
    stroke: 2
  }), "\u5DF2\u9396\u5B9A 2 \u4F4D\u4EBA\u9078", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 11,
    stroke: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 9999,
      background: 'linear-gradient(135deg,#6A25F4,#827AFE)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      boxShadow: '0 6px 18px rgba(106,37,244,0.35)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 16,
    stroke: 2.4
  }))))));
};

/* ─── App shell ─── */
const TraittyApp = ({
  variant = 'chat',
  theme = 'light'
}) => {
  const dark = theme === 'dark';
  const frameBg = dark ? 'radial-gradient(ellipse at top, #1F0F37 0%, #120821 60%, #08020F 100%)' : 'linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 100%)';
  return /*#__PURE__*/React.createElement("div", {
    className: dark ? 't-dark' : '',
    style: {
      width: FRAME_W,
      height: FRAME_H,
      borderRadius: 41,
      background: frameBg,
      boxShadow: '0 20px 60px -20px rgba(40,20,80,0.35), 0 4px 4px rgba(0,0,0,0.18)',
      overflow: 'hidden',
      position: 'relative',
      border: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(255,255,255,0.9)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      padding: '0 18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.05)' : 'rgba(212,215,218,0.4)'}`,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 9999,
      background: '#FF5F57'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 9999,
      background: '#FEBC2E'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 9999,
      background: '#28C840'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Magnolia Script", Pacifico, cursive',
      fontSize: 26,
      background: 'linear-gradient(135deg,#726EF3,#E968CD)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: 1
    }
  }, "Traitty"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.15em',
      padding: '2px 8px',
      borderRadius: 6,
      background: dark ? 'rgba(167,139,250,0.18)' : '#EDE9FE',
      color: dark ? '#C7BFFF' : '#5B19D9',
      fontFamily: 'Inter, sans-serif'
    }
  }, "AI")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      color: dark ? 'rgba(244,241,250,0.7)' : '#6B7280'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: dark ? 'sun' : 'moon',
    size: 15,
    stroke: 1.6
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 16,
    stroke: 2
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 15,
    stroke: 2
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    theme: theme,
    active: variant === 'chat' ? '在團隊合作中適合的角色' : null
  }), variant === 'empty' && /*#__PURE__*/React.createElement(EmptyCenter, {
    theme: theme
  }), variant === 'picker' && /*#__PURE__*/React.createElement(PickerCenter, {
    theme: theme
  }), variant === 'chat' && /*#__PURE__*/React.createElement(ChatCenter, {
    theme: theme
  }), /*#__PURE__*/React.createElement(QuickPrompts, {
    theme: theme
  })));
};
Object.assign(window, {
  EmptyCenter,
  PickerCenter,
  ChatCenter,
  TraittyApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/traitty-app/center.jsx", error: String((e && e.message) || e) }); }

// ui_kits/traitty-app/parts.jsx
try { (() => {
/* === SHARED SVG PARTS === */
const Sparkle = ({
  size = 32,
  gradient = true
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 100 100",
  style: {
    display: 'block'
  }
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: `spk-${size}-${gradient}`,
  x1: "0",
  y1: "0",
  x2: "1",
  y2: "1"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  stopColor: "#5270FF"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "50%",
  stopColor: "#8C6DEE"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  stopColor: "#E860B8"
}))), /*#__PURE__*/React.createElement("path", {
  d: "M50 6 C 52 30, 70 48, 94 50 C 70 52, 52 70, 50 94 C 48 70, 30 52, 6 50 C 30 48, 48 30, 50 6 Z",
  fill: gradient ? `url(#spk-${size}-${gradient})` : '#6A25F4'
}));
const Icon = ({
  name,
  size = 16,
  stroke = 1.6,
  color = 'currentColor',
  style
}) => {
  const paths = {
    'panel-left': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 3v18"
    })),
    'pen': /*#__PURE__*/React.createElement("path", {
      d: "M11 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
    }),
    'pen-line': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M11 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
    })),
    'search': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 21-4.3-4.3"
    })),
    'arrow-up': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "m5 12 7-7 7 7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14"
    })),
    'minus': /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    }),
    'x': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M18 6 6 18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m6 6 12 12"
    })),
    'sun': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
    })),
    'moon': /*#__PURE__*/React.createElement("path", {
      d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
    }),
    'lock': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 11V7a5 5 0 0 1 10 0v4"
    })),
    'check': /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    }),
    'chevron-down': /*#__PURE__*/React.createElement("path", {
      d: "m6 9 6 6 6-6"
    }),
    'thumbs-up': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M7 10v12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H7"
    })),
    'thumbs-down': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M17 14V2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H17"
    })),
    'copy': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "9",
      width: "13",
      height: "13",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
    })),
    'rotate': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 12a9 9 0 1 0 3-6.7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 4v5h5"
    })),
    'plus': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    })),
    'send': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "m22 2-7 20-4-9-9-4Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 2 11 13"
    })),
    'briefcase': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "7",
      width: "20",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
    })),
    'users': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    'message': /*#__PURE__*/React.createElement("path", {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    }),
    'sliders': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      ...style
    }
  }, paths[name] || null);
};
const Avatar = ({
  initial,
  color = '#C7BFFF',
  text = '#5B19D9',
  size = 28
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: size,
    height: size,
    borderRadius: 9999,
    background: color,
    color: text,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: size * 0.42,
    fontFamily: 'Inter, sans-serif',
    flexShrink: 0
  }
}, initial);
const candidates = [{
  id: 'lim',
  name: 'Lim Choon Hong',
  role: '商務開發經理',
  init: 'L',
  av: '#C7BFFF',
  tx: '#5B19D9'
}, {
  id: 'roger',
  name: 'Roger Chang',
  role: '商務開發經理',
  init: 'R',
  av: '#FFD8B8',
  tx: '#A0522D'
}, {
  id: 'eva',
  name: 'Eva Hsu',
  role: '商務開發經理',
  init: 'E',
  av: '#C7BFFF',
  tx: '#5B19D9'
}, {
  id: 'bob',
  name: 'Bob Ku',
  role: '商務開發經理',
  init: 'B',
  av: '#BAC8FF',
  tx: '#3850D8'
}, {
  id: 'eddy',
  name: 'Eddy Chu',
  role: '業務經理',
  init: 'E',
  av: '#C7BFFF',
  tx: '#5B19D9'
}];
Object.assign(window, {
  Sparkle,
  Icon,
  Avatar,
  candidates
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/traitty-app/parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/traitty-app/screens.jsx
try { (() => {
/* === TRAITTY AI APP === */
/* eslint-disable */

const FRAME_W = 1280;
const FRAME_H = 820;

/* ─────────── Sidebar (left) ─────────── */
const Sidebar = ({
  theme,
  active = '在團隊合作中適合的角色'
}) => {
  const dark = theme === 'dark';
  const palette = {
    bg: dark ? 'transparent' : 'transparent',
    text: dark ? 'rgba(244,241,250,0.85)' : '#374151',
    muted: dark ? 'rgba(244,241,250,0.4)' : '#9CA3AF',
    border: dark ? 'rgba(255,255,255,0.06)' : 'rgba(212,215,218,0.6)',
    activeBg: dark ? 'rgba(255,255,255,0.06)' : '#EDE9FE',
    activeText: dark ? '#F4F1FA' : '#5B19D9'
  };
  const groups = [{
    date: '今天',
    items: ['兩位人才在團隊中各自能扮演什麼角色？', '在團隊合作中適合的角色']
  }, {
    date: '昨天',
    items: ['推薦最適合「業務經理」的人才', '幫我分析 Roger 的優勢與盲點']
  }, {
    date: '過去 7 天',
    items: ['尋找適合 B2B 客戶開發的候選人', '誰最能勝任高壓、急迫的專案？', '比較 Lim 與 Eva 的領導風格']
  }, {
    date: '過去 30 天',
    items: ['哪些人才較傾向資料分析型工作', '推薦適合擔任 mentor 的人選']
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 230,
      padding: '20px 16px',
      display: 'flex',
      flexDirection: 'column',
      borderRight: `1px solid ${palette.border}`,
      color: palette.text,
      fontFamily: 'var(--t-font-sans)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4px 4px 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "panel-left",
    size: 20,
    color: palette.text,
    stroke: 1.5
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18,
    color: palette.text,
    stroke: 1.5
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "pen-line",
    size: 18,
    color: palette.text,
    stroke: 1.5
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '11px 14px',
      borderRadius: 12,
      background: 'linear-gradient(135deg, #6A25F4 0%, #827AFE 100%)',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--t-font-zh)',
      fontWeight: 600,
      fontSize: 14,
      boxShadow: '0 8px 22px rgba(106,37,244,0.30)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, "\u958B\u555F\u65B0\u4EBA\u624D\u89E3\u6790")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.date
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.04em',
      color: palette.muted,
      padding: '0 6px 6px',
      fontFamily: 'var(--t-font-zh)'
    }
  }, g.date), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, g.items.map((item, i) => {
    const isActive = item === active;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: '8px 12px',
        borderRadius: 10,
        fontSize: 13,
        fontFamily: 'var(--t-font-zh)',
        cursor: 'pointer',
        background: isActive ? palette.activeBg : 'transparent',
        color: isActive ? palette.activeText : palette.text,
        fontWeight: isActive ? 600 : 400,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, item);
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: '12px 14px',
      borderRadius: 12,
      background: dark ? 'rgba(255,255,255,0.04)' : '#F5F3FF',
      border: `1px solid ${dark ? 'rgba(255,255,255,0.06)' : 'rgba(106,37,244,0.12)'}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: palette.muted,
      fontFamily: 'var(--t-font-zh)'
    }
  }, "\u5269\u9918\u984D\u5EA6"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: palette.muted,
      fontFamily: 'Inter, sans-serif'
    }
  }, "67%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 999,
      background: dark ? 'rgba(255,255,255,0.08)' : '#E5E7EB'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: '67%',
      borderRadius: 999,
      background: 'linear-gradient(90deg,#6A25F4,#E860B8)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initial: "A",
    color: "#FFD8B8",
    text: "#A0522D",
    size: 24
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'var(--t-font-zh)'
    }
  }, "Annette Wong"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: palette.muted
    }
  }, "HR \xB7 \u7384\u6B66\u79D1\u6280")))));
};

/* ─────────── Right rail (quick prompts) ─────────── */
const QuickPrompts = ({
  theme
}) => {
  const dark = theme === 'dark';
  const palette = {
    text: dark ? 'rgba(244,241,250,0.85)' : '#374151',
    muted: dark ? 'rgba(244,241,250,0.5)' : '#6B7280',
    border: dark ? 'rgba(255,255,255,0.08)' : 'rgba(212,215,218,0.8)',
    chip: dark ? 'rgba(255,255,255,0.04)' : '#FFFFFF'
  };
  const sections = [{
    eyebrow: '招募',
    icon: 'briefcase',
    tone: '#6A25F4',
    items: ['工作中主要的優勢與潛力', '在團隊合作中適合的角色', '與其他候選人比較與建議', '是否符合企業文化與價值觀']
  }, {
    eyebrow: '管理',
    icon: 'sliders',
    tone: '#E860B8',
    items: ['如何面對困難、壓力、挑戰', '合適的管理方式與風格', '潛在的盲點與成長方向']
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      padding: '24px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      borderLeft: `1px solid ${palette.border}`,
      color: palette.text,
      fontFamily: 'var(--t-font-zh)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "\u5FEB\u901F\u63D0\u554F"), /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14,
    color: palette.muted
  })), sections.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.eyebrow,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 12,
    color: s.tone,
    stroke: 2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.12em',
      color: s.tone,
      textTransform: 'uppercase',
      fontFamily: 'Inter, sans-serif'
    }
  }, s.eyebrow)), s.items.map((q, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    style: {
      padding: '9px 13px',
      borderRadius: 12,
      textAlign: 'left',
      background: palette.chip,
      color: palette.text,
      border: `1px solid ${palette.border}`,
      fontSize: 12.5,
      fontFamily: 'var(--t-font-zh)',
      cursor: 'pointer',
      boxShadow: dark ? 'none' : '0 1px 2px rgba(0,0,0,0.03)',
      lineHeight: 1.45
    }
  }, q)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: '12px 14px',
      borderRadius: 12,
      background: dark ? 'rgba(232,96,184,0.08)' : '#FFF1F8',
      border: `1px solid ${dark ? 'rgba(232,96,184,0.18)' : 'rgba(232,96,184,0.18)'}`,
      fontSize: 11.5,
      color: dark ? 'rgba(244,241,250,0.7)' : '#9D2766',
      lineHeight: 1.55,
      fontFamily: 'var(--t-font-zh)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: 4
    }
  }, "Tip"), "Traitty \u7684\u56DE\u7B54\u50C5\u4F5C\u70BA\u6C7A\u7B56\u53C3\u8003\uFF0C\u6700\u7D42\u4ECD\u61C9\u7531\u60A8\u4F86\u5224\u65B7\u3002"));
};
Object.assign(window, {
  Sidebar,
  QuickPrompts
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/traitty-app/screens.jsx", error: String((e && e.message) || e) }); }

})();
