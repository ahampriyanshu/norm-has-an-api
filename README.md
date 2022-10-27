<p align="center"><img height="128" src="https://user-images.githubusercontent.com/54521023/134810563-8e34fea4-4250-4e8b-9ddb-5f163bd68e85.jpg"></p>
<h4 align="center">RIP Norm ❤️</h4>

## Base URL

- [https://normhasanapi.herokuapp.com](https://normhasanapi.herokuapp.com)

## API Endpoints

### Get by `name`

- [https://normhasanapi.herokuapp.com/name/{String}](https://normhasanapi.herokuapp.com/name/louieck)

```bash
$ curl https://normhasanapi.herokuapp.com/name/louieck
```

### Get by `id`

- [https://normhasanapi.herokuapp.com/id/{Integer}](https://normhasanapi.herokuapp.com/id/1)

```bash
$ curl https://normhasanapi.herokuapp.com/id/1
```

### Get `n` comics at random

- [https://normhasanapi.herokuapp.com/list/{Integer}](https://normhasanapi.herokuapp.com/list/15)

```bash
$ curl https://normhasanapi.herokuapp.com/list/3
```

### Get by `born year`

- [https://normhasanapi.herokuapp.com/born/{after/before}/{Integer}](https://normhasanapi.herokuapp.com/born/after/1970)

```bash
$ curl https://normhasanapi.herokuapp.com/born/after/1970
```

### Get by `working year`

- [https://normhasanapi.herokuapp.com/since/{Integer}](https://normhasanapi.herokuapp.com/since/1990)

```bash
$ curl https://normhasanapi.herokuapp.com/since/1990
```

### Get by `age`

- [https://normhasanapi.herokuapp.com/age/{min/max}/{Integer}](https://normhasanapi.herokuapp.com/age/min/50)

```bash
$ curl https://normhasanapi.herokuapp.com/age/min/50
```

### Get by `vital status`

- [https://normhasanapi.herokuapp.com/alive/{Boolean}](https://normhasanapi.herokuapp.com/alive/true)

```bash
$ curl https://normhasanapi.herokuapp.com/alive/true
```

### Get by `nationality`

- [https://normhasanapi.herokuapp.com/nationality/{String}](https://normhasanapi.herokuapp.com/nationality/indian)

```bash
$ curl https://normhasanapi.herokuapp.com/nationality/indian
```

### Get by `ethnicity`

- [https://normhasanapi.herokuapp.com/ethnicity/{String}](https://normhasanapi.herokuapp.com/ethnicity/irish)

```bash
$ curl https://normhasanapi.herokuapp.com/ethnicity/irish
```

## Hacktoberfest 2022

<p align="center"><img src="https://user-images.githubusercontent.com/54521023/193333913-2de8ee46-ad51-4f41-99cd-6cbbd6dfab14.png"></p>

## How To Contribute

### 1. Fork the repo

![a](https://user-images.githubusercontent.com/54521023/193337215-c3e0ffc3-f5ff-4c9a-b3e4-e761bd3bf5fb.png)

### 2. Clone the forked repo on your local machine

```bash
git clone git@github.com:{GITHUB_USERNAME}/norm-has-an-api.git -b main --single-branch
```

- [Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

### 3. Switch to new branch

```bash
git checkout -b '{COMIC_NAME}'
```

### 4. Add/modify the required file

- [Before proceeding forward read the contributing guidelines](./CONTRIBUTING.md/#contributing-guidelines)

**Fixing any empty/invalid data:** Commit directly to `db/db.json`
**Adding a new comic:** Create a new file in the `raw` folder. For reference, take a look at `000.json`.

- [File Naming Convention](./CONTRIBUTING.md/#file-naming-convention)

### 5. Move the active changes to the staging area.

```bash
git add .
```

### 6. Commit the changes in local

```bash
git commit -m 'some relevant message'
```

- [Commit Naming Convention](./CONTRIBUTING.md/#commit-naming-convention)

### 7. Push the changes to the remote

```bash
git push -u origin {BRANCH_NAME}
```

### 8. Compare And Pull

![b](https://user-images.githubusercontent.com/54521023/193345564-fcc0aec4-0883-4362-93d4-8cceb34aabb2.png)

- [Before pulling make sure your branch is up-to-date](#sync-your-forked-repository)

### 9. Create a new pull request by giving a relevant PR message

![12](https://user-images.githubusercontent.com/54521023/193345822-250645bf-902f-45fe-912d-d61d5d73d025.png)

### 10. Congrats 🎉

![c](https://user-images.githubusercontent.com/54521023/193345989-2a41358f-e642-423f-a426-e4a24857ec89.png)

### 11. Wait till PR is merged

![d](https://user-images.githubusercontent.com/54521023/193346204-e4bcf37b-da25-4110-8709-56cbfa6c2247.png)

## Sync Your Forked Repository

### CLI

```bash
$ git fetch --all
$ git checkout main
$ git reset --hard upstream/main
$ git push origin main
```

### GUI

![e](https://user-images.githubusercontent.com/54521023/135514252-18bab611-4683-4d3c-a8a8-03117292fbb7.png)
![f](https://user-images.githubusercontent.com/54521023/135514247-020bb6e8-b869-4668-a350-89081a4ed5a8.png)

## Attribution

Built with [Express](https://expressjs.com) and deployed on [Heroku](https://devcenter.heroku.com/articles/getting-started-with-go)

## Contributing Guidelines

Read [contributing guidelines](./CONTRIBUTING.md)

## License

This project is licensed under the [MIT License](./LICENSE.md).
