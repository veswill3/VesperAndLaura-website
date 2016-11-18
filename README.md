# VesperandLaura.com
A place to share our adventures

## to serve up locally
```sh
$ ./serve.sh
```
Then browse to [http://localhost:4000/](http://localhost:4000/).

## Update image filenames and gen img tags from dir
```sh
$ ./gen_image_tags.sh
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

# First time install

Install node and npm, then update npm packages
```sh
$ npm install
```

Install [rbenv](https://github.com/rbenv/rbenv), then ruby and ruby gems
```sh
$ rbenv install 2.3.1 # or whatever the latest version is
$ rbenv global 2.3.1
$ gem install bundler
$ rbenv rehash
```

Install gems (including Jekyll)
```sh
$ bundle install
```

To run grunt tasks
```sh
$ npm run build
```

---
I started with the [HPSTR Jekyll Theme](https://mademistakes.com/work/hpstr-jekyll-theme/)
