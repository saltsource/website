import { minify } from 'html-minifier';
import fs from 'fs';
import path from 'path';

const template = fs.readFileSync(
    path.resolve(__dirname, '../../public/index.html'),
    'utf-8'
).toString();


export default function (innerHTML, {title="", meta="", links=""}={}) {
    const t = template
        .replace('<!--REACT_TITLE-->', title)
        .replace('<!--REACT_META-->', meta)
        .replace('<!--REACT_LINKS-->', links)
        .replace('<!--REACT_APP-->', innerHTML);

    return minify(t, {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true
    });
}
