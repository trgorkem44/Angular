Sayfalar
— sayfa=>Login sayfası => guard eklenecek
——kullanın adı(input text)——Şifre(input text)
—sayfa=>Film ekle güncelleme formu =>kullanıcı tipi admin özel
——film Adı(input text)
——Film Türleri(select)
——-Oyuncular(input text)
——-posterUrl(input text)
——açıklama(textarea)
——-puan(text number)
—sayfa=> my List =>kullanıcı tipi user
—bir card yapılacak
—cardda görsel,filmin ismi ,	puanı ve listeden çıkar ve detaylar isminde iki buton olacak
— safa=>tüm film listesi =>admin,user
——bir tablo olacak tabloda filmin ismi,puan ve türü ismi olacak istemeğe göre alanlarda ekleme çıkarma yapabilirsizi bir de ensonda aksiyon diye bir alan olacak burda bir dropdown altında ,Film detay sayfası(sil , güncelle =>bu iki işlem currentUser==admin)( listeme ekle currentUser==user)olacak.
—Film detay sayfası => filmin tüm bilgilerini gösteren bir sayfa olacak,

Moduller => home modül => pages => Film listesi,movie-detail
        =>login modül =>pages=>login sayfası
        =>movie modül=>film ekle güncellme,mylist,
        =>Shared Modül=>




# AngularMovieApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
