var tipuesearch = {"pages":[{"tags":"misc","text":"2017springcd_bg1 組長: 40423226 組員: 40123158 , 40423206 , 40423207 , 40423219 , 40423229 , 40423241 , 40423243 倉儲: https://github.com/40423226/2017springcd_bg1 簡報: https://40423226.github.io/2017springcd_bg1 網誌: https://40423226.github.io/2017springcd_bg1/blog/ Fossil: https://mde2a2.kmol.info/cdbg1 2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog 課程Fossil: https://mde2a1.kmol.info/","title":"About","url":"./pages/about/"},{"tags":"Course","text":"HyperWorks 14.0 Student Edition Student Edition: Download Now! 影片聽打 Over the years, we have assembled a quite portfolio of solution technology. We're going from Structures or Crash Safety, Thermal, Fluid Dynamics, Systems Simulation, all the way to Electro-Magnetic Simulation. Our specialty is connecting all these different disciplines through Multiphyxics Optimization. We're using simulation technology to drive innovation. To create new products. The key enables of our simulation driven innovation and of technology focus is optimization technology first then the Broad Portfolio of Physics and Computation Performance. We made our name OptiStruct's topology optimization. Throughout the years focusing on concept design and we are now coming out with lattice structure optimization. We still put a lot of energy and composites design and optimization. We always keep improving and advancing the nonlinear capabilities of our districts or non-linear durability. We now have finite sliding contact. So you can do things like a gear simulation and of course for the automotive industry our noise and vibration and acoustics are very advanced and I think we are the leading technology here with destruct also an audience. We focus a lot of contact simulation that we have contact simulation artists are contact simulation new contact types and audios for electronic drug testing. We developed a fluid structure interaction we're back simulation or airplane ditching and their plane landing in water all these are multidisciplinary technologies are or multiphysics and heat transfer analysis. We have a very complete solution now giving you a steady state and transient capabilities one additional focus in in multiphysics simulation is as materials in audience. We developed extended finite element technology to model things that glass breakage for example and we also did the just recently an acquisition and the products will be multiscale designer where we can look at the Michael structure of the materials and then derive analytically material property. So we can look at things like fatigue statistical distribution of fibers we can look at failure progressive failure how the material actually fails we have really good technology. 近端Fossil 1. 更改Start.bat設定 REM tiny2017 主要針對初學 Python3 與 C 學員所建立 REM 近端使用 fossil 管理資料版本, 並且定時轉為 git 格式後上傳到 github @echo off REM 設定 y 硬碟代號與 data 目錄對應 set Disk=y subst %Disk%: \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath=%Disk%:\\home set HomeDrive=%Disk%:\\home set Home=%Disk%:\\home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" REM 將後續的指令執行, 以 %Disk% 為主 %Disk%: REM 設定 PYTHONPATH set PYTHONPATH=%Disk%:\\python-3.5.3-embed-amd64 REM 設定 Leo 所用的編輯器 set LEO_EDITOR=%Disk%:\\wscite\\SciTE.exe REM for fossil https 連線設定 set HTTPS=on REM 指令搜尋路徑設定 set path1=%PATH%;%Disk%:;%Disk%:\\python-3.5.3-embed-amd64;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\python-3.5.3-embed-amd64\\Scripts;%Disk%:\\portablegit\\bin; set path2=c:\\Windows\\Microsoft.NET\\Framework\\v3.5;%Disk%:\\python-3.5.3-embed-amd64\\Lib\\site-packages; path=%path%;%path1%;%path2% start /MIN %Disk%:\\wscite\\SciTE.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe REM 啟動 Leo 編輯器 REM %Disk%:\\Miniconda3\\python.exe %Disk%:\\apps\\launchLeo.py REM 啟動 stunnel start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_bg1.fpssil REM 取得電腦 IP, 然後設定 %Disk%:/stunnel/config/stunnel.conf for /f \"delims=[] tokens=2\" %%a in ('ping -4 -n 1 %ComputerName% &#94;| findstr [') do set NetworkIP=%%a REM echo Network IP: %NetworkIP% REM Saved in %Disk%:\\stunnel\\config\\stunnel.conf @echo off REM 建立 stunnel.conf @echo [https] > %Disk%:\\stunnel\\config\\stunnel.conf REM 附加資料 @echo accept = %NetworkIP%:443 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo connect = 127.0.0.1:8080 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo TIMEOUTclose = 0 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo cert = %Disk%:\\stunnel\\config\\localhost.crt >> %Disk%:\\stunnel\\config\\stunnel.conf @echo key = %Disk%:\\stunnel\\config\\localhost.key >> %Disk%:\\stunnel\\config\\stunnel.conf REM 啟動 stunnel start /MIN stunnel.exe Exit 2. 在tmp裏的fossil_repo目錄執行指令 fossil init 2017springcd_bg1.fpssil 3. 查詢IP ipconfig /all 4. 確認是否有用Proxy, 若有則需要將自己的IP設為例外 5. 使用瀏覽器輸入網址 https:// 電腦IPv4的IP Fourbar 零件繪製 Link_30: SolveSpace Onshape 尺寸圖 Link_50: SolveSpace Onshape 尺寸圖 Link_60: SolveSpace Onshape 尺寸圖 Fourbar組裝: SolveSpace Onshape 正三角形頂點軌跡","title":"20170308 Week 3","url":"./Week 3.html"},{"tags":"Course","text":"分組座位原始碼 #import os adata = open(\"w2b_cadlab.txt\", encoding=\"utf-8\").read() rdata = open(\"w2b_registered.txt\", encoding=\"utf-8\").read().splitlines() #print(adata) alist = adata.splitlines() #print(alist[2]) n = 0 row = 0 final_list = [] w2_list = [] for stud_num in alist[2:]: row = row + 1 blist = stud_num.split(\"\\t\") #print(blist) column = 0 for i in range(len(blist)): column = column + 1 if blist[i] != \"\": #print(blist[i]) clist = blist[i].split(\"_\") stud_data = clist[0]+\"_\"+clist[1]+\"_\"+str(row)+\"_\"+str(column) final_list.append(stud_data) w2_list.append(clist[1]) n = n +1 # 根據數列前導字串排序, 目的在建立分組數列 group_list = sorted(final_list) print(\"分組名單:\") for i in range(len(group_list)): print(group_list[i]) print(\"座位列表:\") for i in range(len(final_list)): print(final_list[i]) for i in range(len(rdata)): if rdata[i] not in w2_list: print(\"缺席學生:\", rdata[i]) print(\"學生總數:\", n) #print(os.environ) Week 2_Fourbar from NFU-MDE104B-40423226 on Vimeo .","title":"20170301 Week 2","url":"./Week 2.html"}]};