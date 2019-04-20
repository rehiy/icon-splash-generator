@ECHO OFF

CD /d %~dp0

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::设置系统环境

SET "PATH=.\node_modules\.bin;%PATH%"

::加载Node环境

IF EXIST D:\RunTime\node\runtime.bat (
    CALL D:\RunTime\node\runtime set "%~n0"
)

::加载Python27环境

IF EXIST D:\RunTime\python27\runtime.bat (
    CALL D:\RunTime\python27\runtime set "%~n0"
)

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CD /D %~dp0

IF NOT EXIST node_modules (
    CMD /C "npm install"
)

IF "%1" == "" CMD /K
