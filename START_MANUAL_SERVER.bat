@echo off
cd /d "%~dp0"
echo Honda CR-V Workshop Manual
echo Starting server from: %CD%
echo.
timeout /t 1 /nobreak >nul
start http://localhost:8080/HONDAESM.HTML
python -m http.server 8080
pause
