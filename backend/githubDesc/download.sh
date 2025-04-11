#!/bin/bash

command="https://github.com/$1/$1"

git clone --depth=1 $command

directory="$1"
cd $directory

touch prompt.txt
pandoc README.md -t plain -o prompt.txt

# Extract the svg extension images to get the languages and tools know to the user
grep -o 'src="[^"]*"' README.md | sed 's/src="//;s/"//' | awk -F'/' '{print $(NF-1) "/" $NF}' | sed 's/\.svg$//' >> prompt.txt

cp prompt.txt ../
cd ..
rm -rf $directory

echo "done"
