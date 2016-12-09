#!/bin/bash

(read -p "Directory name: " DIRECTORY

if [ ! -d "images/$DIRECTORY" ]; then
  echo "images/$DIRECTORY/ not found"
  exit
fi

cd images/$DIRECTORY
echo "Do you want to update filenames?"
select yn in "Yes" "No"; do
    case $yn in
        No ) break;;
        Yes )
            for f in *; do
                mv -i "$f" "$f.tmp"
                # convert to lowercase and swap spaces for underscores
                newf="`echo $f | tr "[:upper:]" "[:lower:]" | tr " " "_"`"
                mv -i "$f.tmp" "$newf"
            done
            break
            ;;
    esac
done

echo "<figure class=\"third\">"
for f in *; do
    echo "    <a href=\"/images/$DIRECTORY/$f\"><img src=\"/images/$DIRECTORY/$f\" alt=\"\"></a>"
done)
echo "</figure>"