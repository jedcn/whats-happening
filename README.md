# What is Happening?

A command line node script that builds a basic HTML report based on Github API
calls.

## Installation

```
npm install what-is-happening
```

## Usage

### Github

```
what-is-happening --user jedcn
```

Results will be written to `jedcn.html`.

Here's a [screenshot of `jedcn.html`][output-from-very-basic-beginnings].

[output-from-very-basic-beginnings]: https://cl.ly/2T1o3C2z400d

### Github Enterprise

Create a file in your home directory named `~/.what-is-happeningrc`.

Add two entries:

```
GITHUB_ENTERPRISE_URL=github.yourcompany.com
ACCESS_TOKEN=<40 character guid>
```

This assumes your github enterprise is located at `github.yourcompany.com`.

And you have previously created a Personal Access Token.

If you do not have an access token and need to create one, you can do so through the web interface of Github Enterprise.

Visit: `https://github.yourcompany.com/settings/tokens`

The Access Token does not need any particular powers-- it should be created
w/ the no additional permissions like so: https://cl.ly/3b1J061I0g0W

Once you have done this, you use the utility in the same way:

```
what-is-happening --user jedcn
```

### Multiple Users

You can get a report for what a "team" of people have been up to by passing
comma-separated values for `--user`:

```
what-is-happening --user jedcn,banderson
```

Results will be written to `jedcn-banderson.html`.

### Focused Repositories

If you know that `jedcn` and `banderson` belong to more than one team and contribute to many repositories, you can focus the report to contain activity only associated with a set of repositories using `--focus-on-repos`:

```
what-is-happening --user jedcn,banderson --focus-on-repos jedcn/NicknameGenerator,banderson/Inception
```

This would report on activity generated by `jedcn` and `banderson` when they
were working on either `jedcn/NicknameGenerator` or `banderson/Inception`.
