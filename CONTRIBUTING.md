## Contributing Guidelines

* Always verify whether or not the comic you wish to create already exists.
* Make sure there are exactly 23 key-value pairs in the pushed json file.
* Use ``null`` for unknown/undefined values(Don't use ``xxxx``, ``" "``, ``' '``, ``?``).
* Every PR would be reviewed before it gets merged.
* Don't alter the structure of the js object.
* Don't commit multiple files at once.

## Commit Naming Convention

```bash
comic[new/existing]: comic_name
docs: file_name
perf: task_detail
```

## File Naming Convention

* `comic_name.json` [Should be in lowercase without any special character]

| Example | |
|-- |--
| billburr.cpp  | ✅
| bill-burr.cpp | ❌
| bill_burr.cpp | ❌
| bill burr.cpp | ❌
| Bill-Burr.cpp | ❌
| BillBurr.cpp  | ❌