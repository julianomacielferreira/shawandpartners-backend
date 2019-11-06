/*
 * The MIT License
 *
 * Copyright 2019 Juliano Maciel Ferreira.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import { Injectable } from '@nestjs/common';

import { User } from '../models/user';
import { Repository } from '../models/repository';

// Axios library for HTTP requests
import axios from 'axios';

@Injectable()
export class UserService {

    private readonly githubAPIUsersUrl = 'https://api.github.com/users';

    public async listUsers(since: number): Promise<any> {

        const githubUsersUrl = `${this.githubAPIUsersUrl}?since=${since}&per_page=5`;

        const users: User[] = await axios.get(githubUsersUrl).then(response => {

            return response.data;

            // tslint:disable-next-line: no-console
        }).catch(err => console.error(err));

        return users;
    }

    public async getUser(login: string): Promise<any> {

        const githubUserUrl = `${this.githubAPIUsersUrl}/${login}`;

        const user: User = await axios.get(githubUserUrl).then(response => {

            return response.data;

            // tslint:disable-next-line: no-console
        }).catch(err => console.error(err));

        return user;
    }

    public async listUserRepositories(login: string): Promise<any> {

        const githubUserReposUrl = `${this.githubAPIUsersUrl}/${login}/repos`;

        const repositories: Repository[] = await axios.get(githubUserReposUrl).then(response => {

            return response.data;

            // tslint:disable-next-line: no-console
        }).catch(err => console.error(err));

        return repositories;
    }
}
