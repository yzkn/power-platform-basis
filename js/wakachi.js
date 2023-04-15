// Copyright (c) 2023 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.

let word_counts = [];

const wakachi = (text) => {
    kuromoji.builder({ dicPath: "kuromoji/dict" }).build(function (err, tokenizer) {
        if (err) {
            console.log(err);
        } else {
            var tokens = tokenizer.tokenize(text);
            tokens.forEach(function (i) {
                word_counts[i['basic_form']] = (word_counts[i['basic_form']] || 0) + 1;
            });
        }
    });
};

// window.addEventListener('DOMContentLoaded', () => {
//     repos.forEach(item => {
//         wakachi(item['item_summary']);
//     });
//     console.log('word_counts', word_counts);
// });