@echo off
echo ===================================
echo Deploy & Deliver - Production Deploy
echo ===================================
echo.
echo Installing dependencies...
call npm install
echo.
echo Building for production...
call npm run build
echo.
echo Starting production server...
echo Server will be available at http://localhost:3001
echo.
call npm run start
