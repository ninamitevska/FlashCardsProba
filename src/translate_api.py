import fastText
import gensim

de_model = gensim.models.KeyedVectors.load_word2vec_format('/Users/ninamitevska/fastText-0.9.2/wiki.de.align.vec', limit=200000)
mk_model = gensim.models.KeyedVectors.load_word2vec_format('/Users/ninamitevska/fastText-0.9.2/wiki.mk.align.vec', limit=200000)
en_model = gensim.models.KeyedVectors.load_word2vec_format('/Users/ninamitevska/fastText-0.9.2/wiki.en.align.vec', limit=200000)

word = en_model["word"]
de_model.similar_by_vector(word)


languages_to_learn =['English', 'German','Macedonian']
languages_translate =['English', 'German','Macedonian']


if(languages_to_learn == 'English' and languages_translate=='German'):
    word = en_model["word"]
    de_model.similar_by_vector(word)

if(languages_to_learn == 'German' and languages_translate=='English'):
    word = de_model["word"]
    en_model.similar_by_vector(word)

if(languages_to_learn == 'English' and languages_translate=='Macedonian'):
    word = en_model["word"]
    mk_model.similar_by_vector(word)

if(languages_to_learn == 'Macedonian' and languages_translate=='English'):
    word = mk_model["word"]
    en_model.similar_by_vector(word)

if(languages_to_learn == 'German' and languages_translate=='Macedonian'):
    word = de_model["word"]
    mk_model.similar_by_vector(word)

if(languages_to_learn == 'Macedonian' and languages_translate=='German'):
    word = mk_model["word"]
    de_model.similar_by_vector(word)