DIR=$(pwd);

cd $DIR/packages/0.25.x && npm publish --registry=https://registry.npmjs.org;
cd $DIR/packages/0.26.x && npm publish --registry=https://registry.npmjs.org;
cd $DIR/packages/0.27.x && npm publish --registry=https://registry.npmjs.org;
cd $DIR/packages/0.28.x && npm publish --registry=https://registry.npmjs.org;
cd $DIR/packages/0.29.x && npm publish --registry=https://registry.npmjs.org;
cd $DIR/packages/0.30.x && npm publish --registry=https://registry.npmjs.org;
cd $DIR/packages/0.31.x && npm publish --registry=https://registry.npmjs.org;
cd $DIR/packages/0.32.x && npm publish --registry=https://registry.npmjs.org;
cd $DIR/packages/0.33.x && npm publish --registry=https://registry.npmjs.org;

cd $DIR;

echo "publish finished!"