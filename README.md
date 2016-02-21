# VesperandLaura.com
A place to share our adventures

## to serve up locally
```sh
$ bundle exec jekyll serve --config _config.yml,_config_dev.yml
```
Then browse to [http://localhost:4000/](http://localhost:4000/).
to serve with drafts add the `--drafts` flag.

I started with the [HPSTR Jekyll Theme](https://mademistakes.com/work/hpstr-jekyll-theme/)

## to pull in updates from the main hpstr repo
I am sure there is a better way than this, but this will work ok for now.
```sh
# create a new branch to work in
$ git checkout -b temp-branch
# update with new info
$ git fetch hpstr-theme
# select the changes you want, or a range like below
$ git cherry-pick [sha1 start commit (not included)]..[sha1 end commit]
# deal with conflicts. dont forget that you can accept their changes,
# even durring resolution by using 'git checkout --theirs [filename]'
# After you finish, squash them into a single commit
$ git reset --soft HEAD~#
$ git commit -m "pulling in latest changes from hpstr theme"
# merge changes with main branch
$ git checkout gh-pages
$ git merge temp-branch
# clean up
$ git branch -D temp-branch
```
