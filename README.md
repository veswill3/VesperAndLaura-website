# VesperandLaura.com
A place to share our adventures

## to serve up locally
```sh
$ bundle exec jekyll serve --config _config.yml,_config_dev.yml
```
Then browse to [http://localhost:4000/](http://localhost:4000/).

## Update image filenames and gen img tags from dir
This will also convert the file names to lowercase and replace spaces with underscores.
```sh
(FOLDER="images directory for this post" # update this line
cd images/$FOLDER &&
for f in *; do
    mv -i "$f" "$f.tmp"
    # convert to lowercase and swap spaces for underscores
    newf="`echo $f | tr "[:upper:]" "[:lower:]" | tr " " "_"`"
    mv -i "$f.tmp" "$newf"
    echo "<a href=\"/images/$FOLDER/$newf\"><img src=\"/images/$FOLDER/$newf\" alt=\"\"></a>"
done)
```

## to pull in updates from the main hpstr repo
```sh
# update with new info
$ git fetch hpstr-theme

# create a new branch to work in
$ git checkout -b temp-branch

# select the range of changes you want like below (notice the '~1')
$ git rebase --onto temp-branch [sha1_start]~1 [sha1_end]
# follow instructions to resolve conflict issues
# merge changes into the integration branch
$ git rebase HEAD temp-branch

# alternatively you can select specific commits via cherry-pick
$ git cherry-pick [sha1]
# dont forget that you can accept their changes, even during resolution by using 'git checkout --theirs [filename]'

# After you finish, squash them into a single commit
$ git reset --soft HEAD~# # where `#` is the number of added commits
$ git commit -m "pulling in latest changes from hpstr theme (latest was [sha1])"

# merge changes with main branch
$ git checkout gh-pages
$ git merge temp-branch

# clean up
$ git branch -d temp-branch
```

I started with the [HPSTR Jekyll Theme](https://mademistakes.com/work/hpstr-jekyll-theme/)
