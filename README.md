# Github Cheat - Commits Generator

A command-line tool to generate your GitHub activity graph.

<a href="https://trakteer.id/annurdien" target="_blank"><img id="wse-buttons-preview" src="https://cdn.trakteer.id/images/embed/trbtn-red-1.png" height="40" style="border:0px;height:40px;" alt="Trakteer Saya"></a>

Are you lazy? but you wanna show off your coding skill's to your friends and family? This tool will help you.

<img src="https://dl.dropboxusercontent.com/s/q2iinti6v0zbhzs/contributions.gif?dl=0" alt="How it works" />

## How To Use

1. Make sure you have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and 
   [Node.js](https://nodejs.org/en/download/) installed on your machine.
3. Generate your commits:
   ```shell script
   npx git-cheater
   ```
   It will create `cheat-folder` folder, initialize git and generate commits for every day within the last year (0-3 commits per day).
4. Create [a private repository](https://github.com/new) in your GitHub called `cheat-folder`
   and push the changes:
   ```shell script 
   cd cheat-folder
   git remote add origin git@github.com:<USERNAME>/cheat-folder.git 
   git push -u origin master
   ```

Done! Go take a look at your GitHub profile 😉

## Customizations

### `--commitsPerDay`

Specify how many commits should be created for every single day.
Default is `0,3` which means it will randomly make from 0 to 3 commits a day. Example:

```shell script
npx git-cheater --commitsPerDay "0,5"
```

### `--weekdaysOnly`

Use it if you don't want to commit on weekends. Example:

```shell script
npx git-cheater --weekdaysOnly
```

### `--startDate` and `--endDate`

By default, the script generates GitHub commits for every day within the last year.
If you want to generate activity for a specific dates, then use these options:

```shell script
npx git-cheater --startDate "2020/09/01" --endDate "2020/09/30"
```

### `--resume`

By default, the script will create new local Git directory and delete any previous folder.
If you don't want to delete previous and just want to add new commit, then use these options:

```shell script
npx git-cheater --startDate "2020/10/01" --endDate "2020/12/30" --resume
```

# More

### `--help`

See full documentation
```shell script
npx git-cheater --help
```

## PS 

It is something I wrote as a joke, so don't take it seriousely. I'm not encourage you to cheat, but I think green graph is so satisfying to watch 🤓
