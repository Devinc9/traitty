const pptx = require('pptxgenjs');
const p = new pptx();
p.layout = 'LAYOUT_WIDE';           // 13.33 x 7.5
p.author = 'Traitty AI';
p.title  = 'CASE 04｜新人到職前 14 天';

const INK='1B1424', INK2='4A4055', INK3='7A7189', LINE='DED6DB',
      VIO='6A4A9E', VIOL='B295E6', VIOS='F0EAF8',
      OCH='9C6218', OCHS='F7EEE1', TEA='2C5561', TEAS='E5EEF0',
      GOOD='3F6B45', GOODS='E9F1E9', BAD='8E3A3A', BADS='F7E8E7',
      WHITE='FFFFFF', PAPER='FAF8F7';
const F='Microsoft JhengHei', FL='Calibri';
const M=0.72, W=13.33, CW=W-2*M;

const sh=()=>({type:'outer',color:'1B1424',blur:14,offset:3,angle:90,opacity:0.10});

function dark(){ const s=p.addSlide(); s.background={color:INK}; return s; }
function light(){ const s=p.addSlide(); s.background={color:WHITE}; return s; }

function eyebrow(s,t,y,c){ s.addText(t,{x:M,y:(y===undefined?0.62:y),w:CW,h:0.28,isTextBox:true,margin:0,
  fontFace:FL,fontSize:11,bold:true,charSpacing:3,color:c||VIO}); }
function head(s,t,y,c,sz){ s.addText(t,{x:M,y:y,w:CW,h:0.8,isTextBox:true,margin:0,
  fontFace:F,fontSize:sz||30,bold:true,color:c||INK,lineSpacing:38}); }
function sub(s,t,y,c,w){ s.addText(t,{x:M,y:y,w:w||CW,h:0.6,isTextBox:true,margin:0,
  fontFace:F,fontSize:14,color:c||INK2,lineSpacing:22}); }
function card(s,x,y,w,h,fill,line){ s.addShape(p.ShapeType.roundRect,{x,y,w,h,
  fill:{color:fill||WHITE},line:{color:line||LINE,width:1},rectRadius:0.10,shadow:sh()}); }
function foot(s,t){ s.addText(t,{x:M,y:6.92,w:CW,h:0.3,isTextBox:true,margin:0,
  fontFace:F,fontSize:9,color:INK3}); }

/* ---------- 1 封面 ---------- */
{ const s=dark();
  s.addShape(p.ShapeType.rect,{x:0,y:0,w:W,h:0.055,fill:{color:VIO}});
  s.addText('TRAITTY AI ／ CASE 04',{x:M,y:1.25,w:CW,h:0.3,isTextBox:true,margin:0,
    fontFace:FL,fontSize:13,bold:true,charSpacing:5,color:VIOL});
  s.addText('新人到職前 14 天',{x:M,y:1.75,w:10.5,h:1.3,isTextBox:true,margin:0,
    fontFace:F,fontSize:54,bold:true,color:WHITE});
  s.addText('Traitty AI 如何協助主管及早發現適應問題',{x:M,y:3.05,w:10.5,h:0.5,isTextBox:true,margin:0,
    fontFace:F,fontSize:20,color:VIOL});
  s.addText('三位新人接受相同的基礎訓練，卻出現三種完全不同的訊號。\n主管用三次提問，把「說不上來的感覺」變成可以問、可以做、可以追蹤的管理依據。',
    {x:M,y:3.75,w:9.6,h:1.0,isTextBox:true,margin:0,fontFace:F,fontSize:14,color:'C6BCD4',lineSpacing:26});
  s.addShape(p.ShapeType.roundRect,{x:M,y:5.05,w:1.9,h:0.42,fill:{color:'2E2313'},
    line:{color:OCH,width:1},rectRadius:0.2});
  s.addText('情境模擬案例',{x:M,y:5.05,w:1.9,h:0.42,isTextBox:true,margin:0,align:'center',
    fontFace:F,fontSize:12,color:'D9A05B'});
  s.addText('連鎖餐飲門市前場｜Day 3 → Day 14｜Traitty AI 使用 3 次',
    {x:M,y:6.55,w:CW,h:0.35,isTextBox:true,margin:0,fontFace:F,fontSize:12,color:'8A7E9B'});
  s.addNotes('開場一句：三位新人、同一套訓練、三種訊號。先問客戶：如果是您，下一班會怎麼帶？');
}

/* ---------- 2 問題 ---------- */
{ const s=light();
  eyebrow(s,'問題',0.62);
  head(s,'同一套訓練，三個都像「適應不良」的訊號',1.0);
  sub(s,'Victoria 是連鎖餐飲門市責任主管，同時帶三位到職第 3 天的新人。沒有人說想離職。',1.85);
  const items=[
    ['Roger','兩次問能不能跳過重複練習。動作快，但有 2 次點餐輸入需資深同仁更正。','太急了，所以容易出錯'],
    ['Eddy','每次被問都說「都還好」。尖峰幾乎不主動提問，一次交接沒說完整。','都說沒問題，可能不願意講'],
    ['Eva H','品質穩定，但連兩次收班後多留 25–30 分鐘，對獨立顧尖峰有些猶豫。','沒信心、學得比較慢']];
  const cw=(CW-0.5)/3;
  items.forEach((it,i)=>{ const x=M+i*(cw+0.25);
    card(s,x,2.5,cw,3.35);
    s.addText(it[0],{x:x+0.28,y:2.72,w:cw-0.56,h:0.42,isTextBox:true,margin:0,
      fontFace:F,fontSize:22,bold:true,color:INK});
    s.addShape(p.ShapeType.roundRect,{x:x+0.28,y:3.2,w:1.02,h:0.3,fill:{color:TEAS},line:{color:TEAS},rectRadius:0.06});
    s.addText('現場事實',{x:x+0.28,y:3.2,w:1.02,h:0.3,isTextBox:true,margin:0,align:'center',
      fontFace:F,fontSize:10,color:TEA});
    s.addText(it[1],{x:x+0.28,y:3.62,w:cw-0.56,h:1.15,isTextBox:true,margin:0,
      fontFace:F,fontSize:13,color:INK2,lineSpacing:21});
    s.addShape(p.ShapeType.line,{x:x+0.28,y:4.88,w:cw-0.56,h:0,line:{color:LINE,width:1,dashType:'dash'}});
    s.addText('主管當下的印象',{x:x+0.28,y:4.98,w:cw-0.56,h:0.25,isTextBox:true,margin:0,
      fontFace:FL,fontSize:9,bold:true,charSpacing:2,color:INK3});
    s.addText('「'+it[2]+'」',{x:x+0.28,y:5.25,w:cw-0.56,h:0.42,isTextBox:true,margin:0,
      fontFace:F,fontSize:13,italic:true,color:INK3});
  });
  s.addText('如果用同一套方法處理——一起再訓練一次、一起多鼓勵幾句——三個人的真正卡點，一個都不會被解決。',
    {x:M,y:6.15,w:CW,h:0.5,isTextBox:true,margin:0,fontFace:F,fontSize:15,bold:true,color:VIO});
  s.addNotes('停在這頁問客戶：這三個訊號，您會怎麼分？多數主管會說「先觀察看看」。');
}

/* ---------- 3 產業背景 ---------- */
{ const s=light();
  eyebrow(s,'為什麼是連鎖餐飲');
  head(s,'高流動、要求快速上手、而且主管有介入空間',1.0);
  const stats=[['4.6%','餐飲業進入率','2025/03 勞動部'],
               ['5.0%','餐飲業退出率','整體服務業約 2.8%'],
               ['4.2%','住宿餐飲自願離職率','美國 BLS：全產業約 2.0%']];
  const cw=(CW-0.5)/3;
  stats.forEach((st,i)=>{ const x=M+i*(cw+0.25);
    card(s,x,2.15,cw,1.95,PAPER);
    s.addText(st[0],{x:x+0.3,y:2.35,w:cw-0.6,h:0.85,isTextBox:true,margin:0,
      fontFace:FL,fontSize:52,bold:true,color:VIO});
    s.addText(st[1],{x:x+0.3,y:3.22,w:cw-0.6,h:0.32,isTextBox:true,margin:0,
      fontFace:F,fontSize:14,bold:true,color:INK});
    s.addText(st[2],{x:x+0.3,y:3.56,w:cw-0.6,h:0.32,isTextBox:true,margin:0,
      fontFace:F,fontSize:11,color:INK3});
  });
  card(s,M,4.45,CW,1.05,OCHS,'E3CFA9');
  s.addText('注意：以上為「外部市場基準」，不是新人專屬離職率，也不是 Traitty AI 的成效。所有對外數字必須標示屬於哪一類——外部市場基準／試點成功標準／建議追蹤指標／實際量測結果，四者不可混用。',
    {x:M+0.32,y:4.62,w:CW-0.64,h:0.75,isTextBox:true,margin:0,fontFace:F,fontSize:12.5,color:'6B4410',lineSpacing:21});
  s.addText('官方調查明言：新進工作者多、退出者亦多、留任不易。這個場景同時具備高流動、快速上手、尖峰壓力，以及最重要的一點——現場主管有實際可介入的空間。',
    {x:M,y:5.75,w:CW,h:0.6,isTextBox:true,margin:0,fontFace:F,fontSize:13,color:INK2,lineSpacing:22});
  s.addNotes('這頁只用來建立「問題值得處理」，不要暗示我們能改善這些數字。');
}

/* ---------- 4 核心：固定開頭 ---------- */
{ const s=dark();
  eyebrow(s,'本案核心',0.62,VIOL);
  s.addText('主管要學的不是 AI，是把現場說清楚',{x:M,y:1.0,w:CW,h:0.7,isTextBox:true,margin:0,
    fontFace:F,fontSize:30,bold:true,color:WHITE});
  s.addText('每次提問前貼上這一句，主管不需要記任何提問技巧。我們稱為「事實—特質—驗證模式」。',
    {x:M,y:1.82,w:CW,h:0.4,isTextBox:true,margin:0,fontFace:F,fontSize:14,color:'C6BCD4'});
  s.addShape(p.ShapeType.roundRect,{x:M,y:2.4,w:CW,h:1.7,fill:{color:'271E33'},
    line:{color:VIO,width:1.5},rectRadius:0.10});
  s.addText('請把我提供的現場事實、系統中的 Traitty 特質線索與你的推論分開，判斷特質和現場反應是否有相符或可能關聯，也列出其他可能原因；再提出需要驗證的行為假設、我下一步可以直接問或做的事情，以及可觀察的工作指標。資料不足請明確說明，不要把推論當成事實。',
    {x:M+0.4,y:2.62,w:CW-0.8,h:1.3,isTextBox:true,margin:0,fontFace:F,fontSize:15,color:WHITE,lineSpacing:30});
  const six=['區分事實、特質與推論','判斷特質與現場反應的可能關聯','不只用特質解釋，也提出其他可能原因',
             '推測接下來可能出現的可觀察行為','提供主管可以直接使用的行動','告訴主管要觀察什麼才能繼續驗證'];
  s.addText('這一句幫主管一次要到六件事',{x:M,y:4.38,w:CW,h:0.32,isTextBox:true,margin:0,
    fontFace:F,fontSize:13,bold:true,color:VIOL});
  const cw=(CW-0.5)/3;
  six.forEach((t,i)=>{ const x=M+(i%3)*(cw+0.25), y=4.82+Math.floor(i/3)*0.92;
    s.addShape(p.ShapeType.ellipse,{x:x,y:y,w:0.36,h:0.36,fill:{color:VIO},line:{color:VIO}});
    s.addText(String(i+1),{x:x,y:y,w:0.36,h:0.36,isTextBox:true,margin:0,align:'center',
      fontFace:FL,fontSize:12,bold:true,color:WHITE});
    s.addText(t,{x:x+0.5,y:y-0.03,w:cw-0.5,h:0.72,isTextBox:true,margin:0,
      fontFace:F,fontSize:12.5,color:'D8D0E2',lineSpacing:20});
  });
  s.addNotes('現場演示重點：把這一句實際貼進 Traitty AI，讓客戶看到它不是行銷話術。');
}

/* ---------- 5 三件事 ---------- */
{ const s=light();
  eyebrow(s,'提問方法 ／ 第二步');
  head(s,'主管只需要再寫自己的三件事',1.0);
  sub(s,'不必描述任何人的性格——那是 Traitty AI 已經掌握的資料。主管代寫，只會讓 AI 重述主管自己的分析。',1.85,null,11.2);
  const rows=[['我的情境','我是誰？現在發生在什麼階段？','我是連鎖餐飲門市的責任主管，帶三位到職第 3 天的新人。'],
              ['我看到的事','對方說了什麼、做了什麼、發生幾次？結果如何？','Roger 兩次問能不能跳過練習；有 2 次輸入需資深同仁更正。'],
              ['我想知道的事','我現在最需要判斷什麼？下一班要怎麼做？','我今天可以直接問他什麼？只需要先調整哪一個帶教動作？']];
  rows.forEach((r,i)=>{ const y=2.62+i*1.22;
    card(s,M,y,CW,1.05,i%2?WHITE:PAPER);
    s.addText(r[0],{x:M+0.3,y:y+0.2,w:1.9,h:0.4,isTextBox:true,margin:0,
      fontFace:F,fontSize:16,bold:true,color:VIO});
    s.addText(r[1],{x:M+2.3,y:y+0.18,w:4.0,h:0.7,isTextBox:true,margin:0,
      fontFace:F,fontSize:12.5,color:INK2,lineSpacing:20});
    s.addText('例：'+r[2],{x:M+6.5,y:y+0.18,w:CW-6.8,h:0.7,isTextBox:true,margin:0,
      fontFace:F,fontSize:12.5,italic:true,color:INK3,lineSpacing:20});
  });
  card(s,M,6.3,CW,0.72,VIOS,'D5C9EA');
  s.addText('寫「我觀察到」的三個要訣：寫行為不寫評價　·　帶次數與情境　·　分開「自己發現」與「別人指出」',
    {x:M+0.3,y:6.46,w:CW-0.6,h:0.42,isTextBox:true,margin:0,fontFace:F,fontSize:13,bold:true,color:VIO});
  s.addNotes('如果客戶問「這樣會不會太麻煩」，回：這三件事主管本來就知道，只是沒寫下來。');
}

/* ---------- 6 五層 ---------- */
{ const s=light();
  eyebrow(s,'提問方法 ／ 第三步');
  head(s,'Traitty AI 的回答固定分五層',1.0);
  sub(s,'客戶看到的不是一份性格報告，而是一條可以檢查的推論鏈。',1.85);
  const layers=[['1','觀察事實','只整理主管實際提供的言語、行為與次數，不加入案例沒有的資訊',TEA,TEAS],
                ['2','特質線索','哪些 Traitty 特質可能與這件事有關',VIO,VIOS],
                ['3','關聯判斷','是可能相關、部分相關，還是目前無法判斷',VIO,VIOS],
                ['4','行為假設','下一班可能出現哪些可觀察行為？還有哪些其他解釋',OCH,OCHS],
                ['5','驗證與行動','要問什麼、調整什麼、記下什麼，才能進一步確認',OCH,OCHS]];
  const cw=(CW-1.0)/5;
  layers.forEach((L,i)=>{ const x=M+i*(cw+0.25);
    card(s,x,2.5,cw,2.35,L[4],L[3]);
    s.addText(L[0],{x:x+0.24,y:2.68,w:0.6,h:0.5,isTextBox:true,margin:0,
      fontFace:FL,fontSize:30,bold:true,color:L[3]});
    s.addText(L[1],{x:x+0.24,y:3.25,w:cw-0.48,h:0.38,isTextBox:true,margin:0,
      fontFace:F,fontSize:15,bold:true,color:INK});
    s.addText(L[2],{x:x+0.24,y:3.68,w:cw-0.48,h:1.0,isTextBox:true,margin:0,
      fontFace:F,fontSize:11.5,color:INK2,lineSpacing:19});
    if(i<4) s.addText('→',{x:x+cw+0.01,y:3.4,w:0.23,h:0.3,isTextBox:true,margin:0,align:'center',
      fontFace:FL,fontSize:14,bold:true,color:INK3});
  });
  s.addText('第三層一律使用四級判斷，不做二分法',{x:M,y:5.15,w:CW,h:0.32,isTextBox:true,margin:0,
    fontFace:F,fontSize:13,bold:true,color:INK});
  const four=['有相符線索','部分相符','目前無法判斷','現有觀察暫不支持'];
  four.forEach((t,i)=>{ const x=M+i*3.01;
    s.addShape(p.ShapeType.roundRect,{x:x,y:5.55,w:2.86,h:0.46,fill:{color:VIOS},line:{color:'D5C9EA'},rectRadius:0.1});
    s.addText(t,{x:x,y:5.55,w:2.86,h:0.46,isTextBox:true,margin:0,align:'center',
      fontFace:F,fontSize:12.5,color:VIO});
  });
  s.addText('這是在回答「是否可能有關」，而不是宣稱特質造成了某個行為。',
    {x:M,y:6.25,w:CW,h:0.4,isTextBox:true,margin:0,fontFace:F,fontSize:13,color:INK2});
  s.addNotes('這一頁是與一般生成式 AI 的差異點：可檢查、可反駁、標明資料不足。');
}

/* ---------- 7 四條邊界 ---------- */
{ const s=light();
  eyebrow(s,'提問方法 ／ 第四步');
  head(s,'四條邊界，主管要主動寫進指令',1.0);
  sub(s,'這四句話不是免責聲明，是讓輸出保持可用的前提。',1.85);
  const b=[['不預測離職','特質資料不能推論離職意圖，寫進去會讓整份輸出失去可信度','請不要預測誰會離職'],
           ['不判定適任','獨立站櫃、晉級、排班屬於公司權責','也不要判斷誰適不適任'],
           ['不自訂公司標準','AI 若自行設定合格門檻或合理工時，主管會誤以為是公司規定','不要自行設定公司制度或工作標準'],
           ['不回答權責問題','主管權限、HR 權限、薪資、任用升遷不該由 AI 判定','不需要判斷公司權責與 HR 權限']];
  const cw=(CW-0.3)/2;
  b.forEach((it,i)=>{ const x=M+(i%2)*(cw+0.3), y=2.5+Math.floor(i/2)*1.85;
    card(s,x,y,cw,1.62);
    s.addShape(p.ShapeType.ellipse,{x:x+0.3,y:y+0.28,w:0.42,h:0.42,fill:{color:BADS},line:{color:BADS}});
    s.addText('✕',{x:x+0.3,y:y+0.28,w:0.42,h:0.42,isTextBox:true,margin:0,align:'center',
      fontFace:FL,fontSize:15,bold:true,color:BAD});
    s.addText(it[0],{x:x+0.88,y:y+0.28,w:cw-1.2,h:0.4,isTextBox:true,margin:0,
      fontFace:F,fontSize:16,bold:true,color:INK});
    s.addText(it[1],{x:x+0.88,y:y+0.72,w:cw-1.2,h:0.52,isTextBox:true,margin:0,
      fontFace:F,fontSize:12,color:INK2,lineSpacing:19});
    s.addText('指令寫法：「'+it[2]+'」',{x:x+0.3,y:y+1.22,w:cw-0.6,h:0.32,isTextBox:true,margin:0,
      fontFace:F,fontSize:11.5,color:VIO});
  });
  card(s,M,6.28,CW,0.7,PAPER);
  s.addText('制度備註：實際工作安排應依各企業職務權限、排班制度、人事規章及法令執行；Traitty AI 不判定主管或 HR 的正式權限。',
    {x:M+0.3,y:6.44,w:CW-0.6,h:0.4,isTextBox:true,margin:0,fontFace:F,fontSize:12,color:INK2});
  s.addNotes('客戶最常在這頁點頭——因為多數 AI 工具不會主動說自己不做什麼。');
}

/* ---------- 8 三個時點 ---------- */
{ const s=light();
  eyebrow(s,'操作節奏');
  head(s,'三次提問，每次只決定「現在」與「下一週」',1.0);
  sub(s,'新人變化很快：不能等兩週才檢視，也不該在 Day 3 就規劃完整 14 天或 90 天。',1.85);
  const t=[['DAY 3','即時情境','早期辨識','三個待驗證假設、三句可直接問的話、三個帶教微調'],
           ['DAY 7','每週更新','修正假設','用現場紀錄檢查原本推論，保留反例與其他可能原因'],
           ['DAY 14','階段回顧','評估穩定性','複合假設拆開判斷，決定哪些做法保留、減少或更換']];
  const cw=(CW-0.6)/3;
  t.forEach((it,i)=>{ const x=M+i*(cw+0.3);
    card(s,x,2.55,cw,2.5,VIOS,'D5C9EA');
    s.addText(it[0],{x:x+0.32,y:2.78,w:cw-0.64,h:0.36,isTextBox:true,margin:0,
      fontFace:FL,fontSize:16,bold:true,charSpacing:2,color:VIO});
    s.addText(it[1],{x:x+0.32,y:3.14,w:cw-0.64,h:0.3,isTextBox:true,margin:0,
      fontFace:F,fontSize:12,color:INK3});
    s.addText(it[2],{x:x+0.32,y:3.55,w:cw-0.64,h:0.42,isTextBox:true,margin:0,
      fontFace:F,fontSize:19,bold:true,color:INK});
    s.addText(it[3],{x:x+0.32,y:4.06,w:cw-0.64,h:0.8,isTextBox:true,margin:0,
      fontFace:F,fontSize:12.5,color:INK2,lineSpacing:20});
  });
  card(s,M,5.35,CW,1.05,PAPER);
  s.addText('中間這幾天，主管每人每天記錄不超過 1 分鐘：兩項工作指標（要有分母）＋一項具體的進步事實＋有沒有新的例外情境。',
    {x:M+0.32,y:5.55,w:CW-0.64,h:0.7,isTextBox:true,margin:0,fontFace:F,fontSize:13,color:INK,lineSpacing:22});
  s.addNotes('Day 14、21 用同一份週更新模板即可，不必每次都在 DEMO 演示。');
}

/* ---------- 9 Day3 產出 ---------- */
{ const s=light();
  eyebrow(s,'DAY 3 ／ Traitty AI 產出');
  head(s,'三個人拿到三套不同的做法',1.0);
  sub(s,'不是同一份建議換名字——這是與一般生成式 AI 最容易看出的差別。',1.78);
  const rows=[['Roger','求快傾向，可能使他在追求速度時犧牲操作準確性',
               '「我們一起看這兩次更正，你覺得卡在哪裡？是流程不熟，還是想趕快完成？」','先求對、再求快'],
              ['Eddy','「都還好」可能代表她較少主動表達不確定，也可能當下尚未形成明確問題',
               '「今天哪一個步驟最有把握？哪一個步驟還想再練一次？」','把「有沒有問題」換成具體問句'],
              ['Eva H','猶豫可能與品質要求，以及尚未掌握尖峰任務中的求助方式有關',
               '「對於下一次獨立顧尖峰，你最大的顧慮是什麼？」','對齊既有流程與求助點']];
  const hdr=['','待驗證的行為假設','一句可以直接問的話','先調整這一個帶教動作'];
  const colx=[M, M+1.55, M+6.05, M+9.85], colw=[1.45,4.4,3.7,2.05];
  hdr.forEach((h,i)=> h && s.addText(h,{x:colx[i],y:2.42,w:colw[i],h:0.3,isTextBox:true,margin:0,
    fontFace:FL,fontSize:10,bold:true,charSpacing:2,color:INK3}));
  rows.forEach((r,i)=>{ const y=2.82+i*1.35;
    card(s,M,y,CW,1.18,i%2?PAPER:WHITE);
    s.addText(r[0],{x:colx[0]+0.28,y:y+0.36,w:colw[0],h:0.42,isTextBox:true,margin:0,
      fontFace:F,fontSize:18,bold:true,color:INK});
    s.addShape(p.ShapeType.roundRect,{x:colx[1],y:y+0.16,w:0.92,h:0.28,fill:{color:OCHS},line:{color:OCHS},rectRadius:0.06});
    s.addText('待驗證',{x:colx[1],y:y+0.16,w:0.92,h:0.28,isTextBox:true,margin:0,align:'center',
      fontFace:F,fontSize:9.5,color:OCH});
    s.addText(r[1],{x:colx[1],y:y+0.5,w:colw[1]-0.2,h:0.6,isTextBox:true,margin:0,
      fontFace:F,fontSize:12,color:INK2,lineSpacing:19});
    s.addText(r[2],{x:colx[2],y:y+0.22,w:colw[2]-0.2,h:0.85,isTextBox:true,margin:0,
      fontFace:F,fontSize:12,color:VIO,lineSpacing:20});
    s.addText(r[3],{x:colx[3],y:y+0.22,w:colw[3],h:0.85,isTextBox:true,margin:0,
      fontFace:F,fontSize:12.5,bold:true,color:INK,lineSpacing:20});
  });
  s.addText('同時校準主管本人：「您對細節與產出標準把關較嚴，可能更注意『未達標』的訊號，而忽略『正在進步』的軌跡。」',
    {x:M,y:6.85,w:CW,h:0.4,isTextBox:true,margin:0,fontFace:F,fontSize:12,italic:true,color:INK3});
  s.addNotes('現場如果時間夠，就在這頁停下來讓客戶讀那三句問話——那是主管當天就能用的東西。');
}

/* ---------- 10 紀錄口徑 ---------- */
{ const s=light();
  eyebrow(s,'DAY 4–14 ／ 主管做什麼');
  head(s,'每天 1 分鐘，但用語要先定義好',1.0);
  sub(s,'紀錄口徑講清楚，下一輪 AI 才不會誤讀；沒有分母的數字會誤導判斷。',1.85);
  const defs=[['外部更正','新人尚未發現，由他人指出後才更正'],
              ['自行修正','新人先發現，並在他人指出前修正'],
              ['主動提問','未經詢問，由新人主動提出'],
              ['被問後回答','用具體問句後才說出的內容，不算主動提問'],
              ['未排班','沒有觀察機會，不能記為 0 次錯誤或 0 次提問']];
  card(s,M,2.5,6.05,3.9);
  s.addText('五個一定要先定義的用語',{x:M+0.32,y:2.72,w:5.4,h:0.34,isTextBox:true,margin:0,
    fontFace:F,fontSize:15,bold:true,color:INK});
  defs.forEach((d,i)=>{ const y=3.2+i*0.6;
    s.addText(d[0],{x:M+0.32,y:y,w:1.55,h:0.34,isTextBox:true,margin:0,
      fontFace:F,fontSize:12.5,bold:true,color:VIO});
    s.addText(d[1],{x:M+1.95,y:y,w:3.95,h:0.5,isTextBox:true,margin:0,
      fontFace:F,fontSize:11.5,color:INK2,lineSpacing:18});
  });
  card(s,M+6.35,2.5,CW-6.35,3.9,OCHS,'E3CFA9');
  s.addText('為什麼一定要有分母',{x:M+6.67,y:2.72,w:CW-7.0,h:0.34,isTextBox:true,margin:0,
    fontFace:F,fontSize:15,bold:true,color:'6B4410'});
  const why=[['「今天 0 次提問」','可能代表他今天根本沒遇到新狀況，不代表退步'],
             ['「今天 0 筆錯誤」','可能代表今天訂單單純，不代表已經熟練'],
             ['「多留時間縮短」','可能只是當天等待與未完成事項比較少']];
  why.forEach((w,i)=>{ const y=3.15+i*0.9;
    s.addText(w[0],{x:M+6.67,y:y,w:CW-7.0,h:0.34,isTextBox:true,margin:0,
      fontFace:F,fontSize:13,bold:true,color:'6B4410'});
    s.addText(w[1],{x:M+6.67,y:y+0.34,w:CW-7.0,h:0.5,isTextBox:true,margin:0,
      fontFace:F,fontSize:11.5,color:'7A5320',lineSpacing:18});
  });
  s.addText('正確寫法：做了幾筆／其中幾筆需更正　·　遇到幾次例外／其中幾次主動問　·　多留幾分鐘／分別用在哪裡',
    {x:M+6.67,y:5.88,w:CW-7.0,h:0.5,isTextBox:true,margin:0,fontFace:F,fontSize:10.5,bold:true,color:'6B4410',lineSpacing:17});
  s.addText('SME 在模擬紀錄時刻意保留了不完美：三人並非全部線性改善，Roger 在忙碌班次再次出錯、Eddy 遇到新流程仍先跟做、Eva H 多留時間一度回升。',
    {x:M,y:6.6,w:CW,h:0.5,isTextBox:true,margin:0,fontFace:F,fontSize:12,italic:true,color:INK3,lineSpacing:20});
  s.addNotes('一份每個人都持續進步的紀錄，不會有人相信——這點主動說出來反而加分。');
}

/* ---------- 11 收斂（高潮） ---------- */
{ const s=dark();
  eyebrow(s,'DAY 14 ／ 成果',0.62,VIOL);
  s.addText('12 天後，判斷收斂了',{x:M,y:1.0,w:CW,h:0.7,isTextBox:true,margin:0,
    fontFace:F,fontSize:32,bold:true,color:WHITE});
  s.addText('主管沒有得到「誰會留、誰會走」的標籤，而是三條各自不同、而且更窄的問題。',
    {x:M,y:1.8,w:CW,h:0.4,isTextBox:true,margin:0,fontFace:F,fontSize:14,color:'C6BCD4'});
  const cv=[['Roger','動作太快，所以容易出錯','一般流程可以穩定；主要卡在忙碌時的複雜欄位確認'],
            ['Eddy','都說沒問題，可能不願意說','一般問句資訊不足；是否提問也取決於有沒有遇到新例外'],
            ['Eva H','不敢承擔尖峰，確認太久','一般尖峰已有掌握；剩餘困難在少見複合異動與求助時點']];
  cv.forEach((r,i)=>{ const y=2.5+i*1.22;
    s.addShape(p.ShapeType.roundRect,{x:M,y:y,w:CW,h:1.05,fill:{color:'271E33'},
      line:{color:'3E3350',width:1},rectRadius:0.10});
    s.addText(r[0],{x:M+0.35,y:y+0.3,w:1.5,h:0.45,isTextBox:true,margin:0,
      fontFace:F,fontSize:19,bold:true,color:WHITE});
    s.addText('DAY 3 的印象',{x:M+2.0,y:y+0.16,w:3.9,h:0.26,isTextBox:true,margin:0,
      fontFace:FL,fontSize:9,bold:true,charSpacing:2,color:'8A7E9B'});
    s.addText(r[1],{x:M+2.0,y:y+0.44,w:3.9,h:0.45,isTextBox:true,margin:0,
      fontFace:F,fontSize:13.5,color:'9E93AE'});
    s.addText('→',{x:M+6.05,y:y+0.38,w:0.45,h:0.35,isTextBox:true,margin:0,align:'center',
      fontFace:FL,fontSize:17,bold:true,color:VIOL});
    s.addText('DAY 14 的判斷',{x:M+6.62,y:y+0.16,w:CW-6.95,h:0.26,isTextBox:true,margin:0,
      fontFace:FL,fontSize:9,bold:true,charSpacing:2,color:VIOL});
    s.addText(r[2],{x:M+6.62,y:y+0.44,w:CW-6.95,h:0.45,isTextBox:true,margin:0,
      fontFace:F,fontSize:13.5,color:WHITE});
  });
  s.addText('AI 沒有用特質替主管下定論，而是讓主管先形成假設、回到現場驗證，再依新事實修正管理方式。',
    {x:M,y:6.35,w:CW,h:0.45,isTextBox:true,margin:0,fontFace:F,fontSize:14,bold:true,color:VIOL});
  s.addNotes('這是整場 DEMO 的高潮。讓客戶自己讀完三行再說話。');
}

/* ---------- 12 可主張／不可主張 ---------- */
{ const s=light();
  eyebrow(s,'對外邊界');
  head(s,'這個案例可以主張什麼，不能主張什麼',1.0);
  sub(s,'先講清楚不能主張的部分，可以主張的部分才會被相信。',1.85);
  const yes=['提早辨識新人不同的適應卡點','將特質資料轉成主管能直接採取的行動',
             '用現場事實修正初始特質推論','提升帶教的個人化、針對性與一致性',
             '建立有利於新人適應與短期留任的管理條件','三位新人、14 天，只需三個決策點的整合提問'];
  const no=['Traitty AI 已降低新人離職率','三位新人已成功留任',
            '行為改善由 Traitty AI 單獨造成','Traitty AI 能判定誰可以獨立站櫃',
            '特質直接造成錯誤、沉默或多留時間'];
  const cw=(CW-0.35)/2;
  card(s,M,2.5,cw,3.5,GOODS,'C3D8C5');
  s.addText('✓　可以主張',{x:M+0.32,y:2.72,w:cw-0.64,h:0.36,isTextBox:true,margin:0,
    fontFace:F,fontSize:16,bold:true,color:GOOD});
  s.addText(yes.map((t,i)=>({text:t,options:{bullet:true,breakLine:i<yes.length-1}})),
    {x:M+0.32,y:3.2,w:cw-0.64,h:2.6,isTextBox:true,margin:0,fontFace:F,fontSize:12.5,
     color:'2E4F33',paraSpaceAfter:8,lineSpacing:20});
  card(s,M+cw+0.35,2.5,cw,3.5,BADS,'DFBDBB');
  s.addText('✕　不能主張',{x:M+cw+0.67,y:2.72,w:cw-0.64,h:0.36,isTextBox:true,margin:0,
    fontFace:F,fontSize:16,bold:true,color:BAD});
  s.addText(no.map((t,i)=>({text:t,options:{bullet:true,breakLine:i<no.length-1}})),
    {x:M+cw+0.67,y:3.2,w:cw-0.64,h:2.6,isTextBox:true,margin:0,fontFace:F,fontSize:12.5,
     color:'6E2C2C',paraSpaceAfter:8,lineSpacing:20});
  card(s,M,6.25,CW,0.75,PAPER);
  s.addText('模擬案例證明的是「早期辨識與管理行動」的改善；短期留任率與離職率，必須由真實多門市試點驗證。',
    {x:M+0.32,y:6.42,w:CW-0.64,h:0.42,isTextBox:true,margin:0,fontFace:F,fontSize:13,bold:true,color:INK});
  s.addNotes('客戶如果問「能不能證明降低離職率」，就用這一頁回答，不要含糊帶過。');
}

/* ---------- 13 演示腳本 ---------- */
{ const s=light();
  eyebrow(s,'業務使用');
  head(s,'10–12 分鐘現場演示腳本',1.0);
  const script=[['0–1','場景鋪陳','三位新人、同一套訓練、三種訊號。問客戶：如果是您，下一班會怎麼帶？'],
                ['1–2','產業基準','餐飲進入率 4.6%／退出率 5.0%，明確標示為外部市場基準'],
                ['2–4','現場操作第一輪','貼上固定開頭＋Day 3 提問，實際跑出三張表'],
                ['4–6','個人化證明','指出三人拿到不同的假設、問話與帶教動作'],
                ['6–8','主管只記 1 分鐘','展示紀錄口徑，特別是「未排班不算 0 次」'],
                ['8–10','第二／三輪','展示假設被支持、被修正、被縮小的過程'],
                ['10–12','邊界與 CTA','明確說「我們不預測離職，也不判定適任」，再導向真實試點']];
  script.forEach((r,i)=>{ const y=1.95+i*0.68;
    if(i%2===0) s.addShape(p.ShapeType.rect,{x:M,y:y,w:CW,h:0.62,fill:{color:PAPER},line:{color:PAPER}});
    s.addText(r[0]+' 分',{x:M+0.25,y:y+0.13,w:1.1,h:0.36,isTextBox:true,margin:0,
      fontFace:FL,fontSize:13,bold:true,color:VIO});
    s.addText(r[1],{x:M+1.5,y:y+0.13,w:2.6,h:0.36,isTextBox:true,margin:0,
      fontFace:F,fontSize:13.5,bold:true,color:INK});
    s.addText(r[2],{x:M+4.3,y:y+0.13,w:CW-4.55,h:0.4,isTextBox:true,margin:0,
      fontFace:F,fontSize:12.5,color:INK2});
  });
  card(s,M,6.75,CW,0.0,WHITE);
  s.addText('最常被追問：「這和一般生成式 AI 有什麼不同？」→ 一般 AI 只能給一般性的新人帶教建議；Traitty AI 對應的是這位主管與這三位新人，所以三人拿到三套不同的驗證方式。',
    {x:M,y:6.75,w:CW,h:0.5,isTextBox:true,margin:0,fontFace:F,fontSize:11.5,italic:true,color:INK3,lineSpacing:19});
  s.addNotes('時間只有 5 分鐘時：砍掉 1–2 分與 6–8 分兩段，保留操作與收斂。');
}

/* ---------- 14 結語 ---------- */
{ const s=dark();
  s.addShape(p.ShapeType.rect,{x:0,y:7.44,w:W,h:0.06,fill:{color:VIO}});
  eyebrow(s,'結論',1.2,VIOL);
  s.addText('同樣是新人不提問、操作出錯或不敢獨立，\n原因可能完全不同。',
    {x:M,y:1.65,w:11.3,h:1.6,isTextBox:true,margin:0,fontFace:F,fontSize:34,bold:true,
     color:WHITE,lineSpacing:52});
  s.addText('Traitty AI 幫助主管把模糊印象轉成可驗證的判斷，並在新人問題累積前採取適合的行動。',
    {x:M,y:3.45,w:10.6,h:0.5,isTextBox:true,margin:0,fontFace:F,fontSize:16,color:VIOL});
  const next=[['下一步一','選 2–3 家門市，做為期 30 天的真實試點'],
              ['下一步二','追蹤 Day 14／30 留任、獨立作業時間、帶教工時、錯誤與重工'],
              ['下一步三','把「事實—特質—驗證模式」放進門市主管的帶教指引']];
  next.forEach((n,i)=>{ const y=4.3+i*0.62;
    s.addShape(p.ShapeType.ellipse,{x:M,y:y+0.04,w:0.3,h:0.3,fill:{color:VIO},line:{color:VIO}});
    s.addText(String(i+1),{x:M,y:y+0.04,w:0.3,h:0.3,isTextBox:true,margin:0,align:'center',
      fontFace:FL,fontSize:11,bold:true,color:WHITE});
    s.addText(n[1],{x:M+0.48,y:y,w:11.5,h:0.4,isTextBox:true,margin:0,
      fontFace:F,fontSize:13.5,color:'D8D0E2'});
  });
  s.addText('Traitty AI｜人才決策・團隊互動 Copilot',{x:M,y:6.45,w:7,h:0.35,isTextBox:true,margin:0,
    fontFace:F,fontSize:14,bold:true,color:WHITE});
  s.addText('本案為情境模擬案例：現場紀錄由多領域 SME 依真實餐飲現場條件建立，Traitty AI 的三次回答為實際產品輸出。',
    {x:M,y:6.82,w:11.9,h:0.35,isTextBox:true,margin:0,fontFace:F,fontSize:10,color:'8A7E9B'});
  s.addNotes('收尾不要加碼承諾成效，直接把試點的四個追蹤指標講清楚。');
}

p.writeFile({fileName:'/tmp/deck/CASE04_客戶DEMO簡報.pptx'}).then(f=>console.log('WROTE',f));
