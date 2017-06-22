var tipuesearch = {"pages":[{"url":"./pages/about/","tags":"misc","title":"About","text":"2017Spring 機械設計工程系網際內容管理 課程倉儲: http://github.com/mdecourse/2017springwcm 課程投影片: http://mdecourse.github.io/2017springwcm 課程網誌: http://mdecourse.github.io/2017springwcm/blog"},{"url":"./2017spring-wcm-final.html","tags":"Course","title":"期末考週","text":"以下為網際內容管理 2017 Spring 第十八週學員連結. window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } 甲班學員投影片: from browser import document, html container1 = document['container1'] adata = open(\"./../data/final/1a_list.txt\").read() alist = adata.splitlines() n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://s\"+str(stud_num)+\".github.io/2017springwcm_hw\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container1 <= mlink 甲班學員網誌: from browser import document, html adata = open(\"./../data/final/1a_list.txt\").read() alist = adata.splitlines() container2 = document['container2'] n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://s\"+str(stud_num)+\".github.io/2017springwcm_hw/blog\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container2 <= mlink 甲班學員倉儲: from browser import document, html adata = open(\"./../data/final/1a_list.txt\").read() alist = adata.splitlines() container3 = document['container3'] n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://github.com/s\"+str(stud_num)+\"/2017springwcm_hw\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container3 <= mlink"},{"url":"./2017spring-wcm-midterm.html","tags":"Course","title":"期中分組任務","text":"請在期中考週時段, 以組為單位完成下列指定任務. 建立 Ubuntu 虛擬主機 請各組在 Virtualbox 中, 以橋接網路卡設定, 建立一台 Ubuntu 16.04 伺服主機, 設定 IPv4 網路連線後, 以 sudo apt install nginx 後, 利用瀏覽器連接所安裝的 nginx 伺服器後, 即完成第1項任務. 以 Stunnel 建立 Fossil SCM Server 請參考 Ubuntu 16.04 環境下啟動 Stunnel 與 Fossil SCM 中的說明, 設法在 Ubuntu 虛擬主機中, 啟動 https 模式下的 Fossil SCM Server. 完成後為每位組員建立帳號, 並讓組員從其他 client 端電腦連線後, 分別建立以[\"學號\"期中報告]為標題的 Wiki 頁面, 並在其中概述各組元的課程學習心得. 以 Fossil SCM 版次管理檔案 請參考 http://mde.tw/2017springvcp/blog/fossil-scm-version-control.html 中的說明, 利用各組所建立, 虛擬主機上的 Fossil SCM Server, 管理各組員利用 ShareX 在現場所拍攝的操作練習影片, 完成後請回報各組虛擬主機 IP 與 Fossil SCM 設定連結, 以便進行查驗. 啟動 CMSimfly 請在各組所建立的虛擬主機中啟動 CMSfimly 網際內容管理系統, 並設法將上述各文字資料與影片資料嵌入頁面中, 完成後即可以進行各組期中自評與互評成績登錄."},{"url":"./2017spring-ubuntu-stunnel-fossil.html","tags":"Course","title":"Ubuntu 16.04 環境下啟動 Stunnel 與 Fossil SCM","text":"說明如何在 Ubuntu 操作系統中, 安裝並設定 Stunnel 後與 Fossil SCM server 結合啟動. Stunnel 與 Fossil SCM 安裝 sudo apt update sudo apt install stunnel4 -y sudo apt install fossil 環境變數與開機啟動設定 /etc/environment 設定: HTTPS=on /etc/default/stunnel4 檔案設定: ENABLED=1 Stunnel 設定並執行 fossil http 指令 stunnel.conf 建立 localhost.key 與 localhost.crt: sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt /etc/stunnel/stunnel.conf 設定檔案, 可同時支援 IPv4 與 IPv6 協定: [https] accept = your_IPv4_ip:443 accept = :::443 cert = /etc/stunnel/localhost.crt key = /etc/stunnel/localhost.key exec = /usr/bin/fossil execargs = /usr/bin/fossil http /home/user/repository/mde2a1.fossil --https --nojail 其中 --nojail 目的在 drop the root privilege but do not enter the chroot jail 重新啟動 stunnel4 則使用 /etc/init.d/stunnel4 restart 上述設定完成後, 重新開機即可以 https://yourip 連結至 mde2a1.fossil 網際管理介面."},{"url":"./2017spring-stunnel-fossil.html","tags":"Course","title":"Windows 環境下啟動 Stunnel 與 Fossil SCM","text":"說明如何在 Windows 操作系統中, 利用 batch 檔案取得電腦連外 IP, 並且設定 Stunnel 後與 Fossil SCM server 配合啟動. 以下使用 Spring 2017 1GB 版本的隨身程式系統, 修改 start.bat 如下後, 可以自動取得電腦連外 IPv4 IP 位址, 並將設定資料寫入 stunnel.conf 後啟動. REM tiny2017 主要針對初學 Python3 與 C 學員所建立 REM 近端使用 fossil 管理資料版本, 並且定時轉為 git 格式後上傳到 github @echo off REM 設定 y 硬碟代號與 data 目錄對應 set Disk=y subst %Disk%: \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath=%Disk%:\\home set HomeDrive=%Disk%:\\home set Home=%Disk%:\\home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" REM 將後續的指令執行, 以 %Disk% 為主 %Disk%: REM 設定 PYTHONPATH set PYTHONPATH=%Disk%:\\python-3.5.3-embed-amd64 REM 設定 Leo 所用的編輯器 set LEO_EDITOR=%Disk%:\\wscite\\SciTE.exe REM for fossil https 連線設定 set HTTPS=on REM 指令搜尋路徑設定 set path1=%PATH%;%Disk%:;%Disk%:\\python-3.5.3-embed-amd64;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\python-3.5.3-embed-amd64\\Scripts;%Disk%:\\portablegit\\bin; set path2=c:\\Windows\\Microsoft.NET\\Framework\\v3.5;%Disk%:\\python-3.5.3-embed-amd64\\Lib\\site-packages; set path3=\"C:\\Program Files (x86)\\Google\\Chrome\\Application\" path=%path%;%path1%;%path2%;%path3% start /MIN %Disk%:\\wscite\\SciTE.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe REM 啟動 Leo 編輯器 REM %Disk%:\\Miniconda3\\python.exe %Disk%:\\apps\\launchLeo.py REM 啟動 stunnel start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\vcp.fossil REM 取得電腦 IP, 然後設定 %Disk%:/stunnel/config/stunnel.conf for /f \"delims=[] tokens=2\" %%a in ('ping -4 -n 1 %ComputerName% &#94;| findstr [') do set NetworkIP=%%a REM echo Network IP: %NetworkIP% REM Saved in %Disk%:\\stunnel\\config\\stunnel.conf @echo off REM 建立 stunnel.conf @echo [https] > %Disk%:\\stunnel\\config\\stunnel.conf REM 附加資料 @echo accept = %NetworkIP%:443 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo connect = 127.0.0.1:8080 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo TIMEOUTclose = 0 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo cert = %Disk%:\\stunnel\\config\\localhost.crt >> %Disk%:\\stunnel\\config\\stunnel.conf @echo key = %Disk%:\\stunnel\\config\\localhost.key >> %Disk%:\\stunnel\\config\\stunnel.conf REM 啟動 stunnel start /MIN stunnel.exe REM 以 chrome 連線到 https://%NetworkIP%:443 chrome https://%NetworkIP% Exit"},{"url":"./2017spring-ubuntu-ethercalc.html","tags":"Course","title":"Ubuntu 16.04 環境下安裝 Ethercalc","text":"說明如何在 Ubuntu 16.04 操作系統中安裝 Ethercalc, 並令其開機時啟動. 安裝 node.js 6.x 版 curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - sudo apt-get install -y nodejs 安裝 redis server sudo apt install redis-server 安裝 ethercalc sudo npm i -g ethercalc 編輯 /etc/rc.local 加入 ethercalc 啟動指令 重新開機後, 就可以利用 http://your ip or domain name:8000 連接 Ethercalc 網頁"},{"url":"./web-based-python3.html","tags":"Course","title":"網際 Python3 程式環境","text":"網際內容管理課程利用 Brython 建立一個能夠直接在瀏覽器中執行的 Python3 程式環境, 讓使用者進行各種與機械產品開發相關的設計運算與動靜態模擬. window.onload=function(){ brython(1); } from browser import document, html container1 = document['container1'] 利用伺服器執行 Python3 程式 Jupyterhub: https://8888.kmol.info:9443 利用以下的編輯器執行 Python3 程式 在 Firefox 中, 以 Preferences - General - Downloads 選擇\"Always ask me where to save files\" 在 Chrome 中, 以 Settings - Advanced - Downloads 選擇 Ask where to save each file before downloading function doSave(){ var blob = new Blob([localStorage[\"py_src\"]], {type: \"text/plain;charset=utf-8\"}); filename = document.getElementById('filename').value saveAs(blob, filename+\".py\"); } import sys import time import traceback import javascript from browser import document as doc, window, alert has_ace = True try: editor = window.ace.edit(\"editor\") session = editor.getSession() session.setMode(\"ace/mode/python\") editor.setOptions({ 'enableLiveAutocompletion': True, 'enableSnippets': True, 'highlightActiveLine': False, 'highlightSelectedWord': True }) except: from browser import html editor = html.TEXTAREA(rows=20, cols=70) doc[\"editor\"] <= editor def get_value(): return editor.value def set_value(x):editor.value = x editor.getValue = get_value editor.setValue = set_value has_ace = False if hasattr(window, 'localStorage'): from browser.local_storage import storage else: storage = None def reset_src(): if storage is not None and \"py_src\" in storage: editor.setValue(storage[\"py_src\"]) else: editor.setValue('for i in range(10):\\n\\tprint(i)') editor.scrollToRow(0) editor.gotoLine(0) def reset_src_area(): if storage and \"py_src\" in storage: editor.value = storage[\"py_src\"] else: editor.value = 'for i in range(10):\\n\\tprint(i)' class cOutput: def __init__(self,target): self.target = doc[target] def write(self,data): self.target.value += str(data) #if \"console\" in doc: sys.stdout = cOutput(\"console\") sys.stderr = cOutput(\"console\") def to_str(xx): return str(xx) info = sys.implementation.version doc['version'].text = 'Brython %s.%s.%s' % (info.major, info.minor, info.micro) output = '' def show_console(ev): doc[\"console\"].value = output doc[\"console\"].cols = 60 doc[\"console\"].rows = 10 # load a Python script def load_script(evt): _name = evt.target.value + '?foo=%s' % time.time() editor.setValue(open(_name).read()) # run a script, in global namespace if in_globals is True def run(*args): global output doc[\"console\"].value = '' src = editor.getValue() if storage is not None: storage[\"py_src\"] = src t0 = time.perf_counter() try: #ns = {'__name__':'__main__'} ns = {'__name__':'editor'} exec(src, ns) state = 1 except Exception as exc: traceback.print_exc(file=sys.stderr) state = 0 output = doc[\"console\"].value print('<completed in %6.2f ms>' % ((time.perf_counter() - t0) * 1000.0)) return state if has_ace: reset_src() else: reset_src_area() def clear_console(ev): doc[\"console\"].value = \"\" doc['run'].bind('click',run) doc['show_console'].bind('click',show_console) doc['clear_console'].bind('click',clear_console) Filename: .py Run Output 清除 from browser import document as doc import script1 def ex1(ev): script1.editor.setValue('''#ex1 簡單的 for 迴圈範例 for i in range(10): print(i) ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex1'].bind('click',ex1) ex1 -for 迴圈 from browser import document as doc import script1 def ex2(ev): script1.editor.setValue('''#溫度轉換程式 from browser import document as doc # 因為此函式與滑鼠互動, 需要 event 當作輸入 def convTemp(): mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏 \" + str(cdegree) + \"度=華氏 \" + str(fdegree) + \"度\" # 利用 print() 將轉換結果送到 console 區 print(output_string) #直接呼叫 convTemp() 執行 convTemp() ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex2'].bind('click',ex2) ex2 -溫度換算 from browser import document import script1 def get_file(e): data = open(\"./../python_ex/for1.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get\"].bind(\"click\", get_file) from browser import document import script1 def get_temp1(e): data = open(\"./../python_ex/temp1.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get_temp1\"].bind(\"click\", get_temp1) from browser import document import script1 def get_ver_and_kw(e): data = open(\"./../python_ex/ver_and_kw.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get_ver_and_kw\"].bind(\"click\", get_ver_and_kw) for1.py temp1.py ver_and_kw.py"},{"url":"./2017spring-mde-wcm.html","tags":"Course","title":"2017Spring 機械設計工程系網際內容管理","text":"2017 Spring 網際內容管理 歷年網際內容管理課程 2016 Spring 網際內容管理 2015 Spring 網際內容管理 網際內容管理課程評分標準: (一) 各分組學員是否按步就班利用網際簡報、網誌與操作影片呈現細節內容 (50%) - 各組學員根據實際完成內容自評成績後 * 老師認可百分比 (二) 各分組學員在協同過程是否互助砥礪完成既定工作任務 (分組成員互評) (20%) - 各組學員根據實際內容舉證互評成績平均, 參考系統: https://pygroup-ag100.rhcloud.com (三) 上課出席與表現 (各學員根據實際內容舉證自評成績 * 老師認可百分比) (30%) 網際內容管理課程規劃 2017 WCM 機械設計工程系網際內容管理 (五) 13:20-16:10 各週上課日期: w1 -2/24 - 請每人準備一個隨身碟, 下載 可攜程式系統 (1GB). 複習如何在單機環境與網際環境中執行基本的 Python3 程式. W1影片 w2-3/3 - CMSimfly 網際內容管理程式開發 啟動 CMSimfly CMSimfly 基本操作 手動設定 Stunnel w3-3/10 - CMSimfly 網際內容管理程式開發 w4-3/17 - CMSimfly 網際內容管理程式開發 自動設定 Stunnel w5-3/24 - CMSimfly 網際內容管理程式開發 w6-3/31(放假) w7-4/7 - 分組期中專案執行 w8-4/14 - 期中簡報與自評 w9-4/21 - Fossil SCM 配置與應用 w10-4/28 - Fossil SCM 配置與應用 w11-5/5 - Fossil SCM 配置與應用 w12-5/12 - Fossil SCM 配置與應用 w13-5/19 - 網際伺服器環境管理 w14-5/26 - 網際伺服器環境管理 w15-6/2 - 網際伺服器環境管理 w16-6/9 - 分組期末專案執行 w17-6/16 - 分組期末專案執行 w18-6/23 - 期末簡報與自評"}]};