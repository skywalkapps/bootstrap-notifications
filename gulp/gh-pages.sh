#!/bin/bash

# Using git-subtree, we push specific folder to the branch

# SETUP
# $ git checkout master 
# $ git subtree split --prefix docs -b gh-pages // creates local gh-pages for docs folder
# $ git push -f origin gh-pages:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin
# $ git branch -D gh-pages # delete the local gh-pages because you will need it: ref

#
# This script copies docs to gh-pages branch
echo ">> Copy contents of docs to gh-pages branch"

export PLUGIN_ROOT=$( pwd )
echo ">> PLUGIN_ROOT nastaveno na $PLUGIN_ROOT"

git subtree push --prefix docs origin gh-pages

echo ">> Push to gh-pages is done"
exit 0
