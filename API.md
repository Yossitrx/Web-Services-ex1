# Web-Services-ex1

## Getting Started

instructions: In the URL insert the following to receive 

### Show All students

URL: /students (default one)

```
https://infinite-refuge-73334.herokuapp.com/students

[
{
name: "yossi azoulay",
grade: "100",
id: "300",
year: "2016"
},
{
name: "noam roiz",
grade: "80",
id: "301",
year: "2000"
},
{
name: "sami boreks",
grade: "70",
id: "302",
year: "2005"
},
{
name: "orna daza",
grade: "60",
id: "303",
year: "1980"
},
{
name: "moshe yanai",
grade: "50",
id: "303",
year: "1950"
},
{
name: "foshiko azoulay",
grade: "100",
id: "304",
year: "2015"
}
]
```

### Show student by ID

URL: /showId/XXX - numbers are from 300 - 304

```
https://infinite-refuge-73334.herokuapp.com/showId/300
[
{
name: "yossi azoulay",
grade: "100",
id: "300",
year: "2016"
}
]
```
### Show student by Year

URL: /showYear/XXXX - vaild numbers 1950,1980,2000,2005,2015,2016

```
https://infinite-refuge-73334.herokuapp.com/showYear/2015

[
{
name: "foshiko azoulay",
grade: "100",
id: "304",
year: "2015"
}
]
```

## END

```
Author: Yossi Azoulay
```
