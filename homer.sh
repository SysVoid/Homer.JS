echo "> Creating Directory";
mkdir homer;

echo "> CD'ing"
cd homer;

echo "> Fetching the latest version.";
wget "https://github.com/SysVoid/Homer.JS/archive/master.zip" -q -o /dev/null;

echo "> Unzipping archive.";
unzip -q master.zip;

echo "> Moving files...";
mv Homer.JS-master/* ./; rm -rf Homer.JS-master*;

echo "> Running for the first time...";
node homer;

echo "=========================";
echo "#  All set!             #";
echo "=========================";
echo "#  Run Homer.JS at any  #";
echo "#  time using:          #";
echo "#  $ node homer/homer   #";
echo "=========================";
