@ECHO OFF

CD /d %~dp0

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::����ϵͳ����

SET "PATH=.\node_modules\.bin;%PATH%"

::����Node����

IF EXIST D:\RunTime\node\runtime.bat (
    CALL D:\RunTime\node\runtime set "%~n0"
)

::����Python����

IF EXIST D:\RunTime\python3\runtime.bat (
    CALL D:\RunTime\python3\runtime set "%~n0"
)

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CD /D %~dp0

IF NOT EXIST node_modules (
    CMD /C "npm install"
)

IF "%1" == "" CMD /K
