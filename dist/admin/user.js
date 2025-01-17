"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    /**
     * @ignore
     */
    constructor(client) {
        this.client = client;
    }
    async create(body, query, headers) {
        return this.client.fetch(`/admin/users`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async update(id, body, query, headers) {
        return this.client.fetch(`/admin/users/${id}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async list(queryParams, headers) {
        return this.client.fetch(`/admin/users`, {
            headers,
            query: queryParams,
        });
    }
    async retrieve(id, query, headers) {
        return this.client.fetch(`/admin/users/${id}`, {
            query,
            headers,
        });
    }
    async delete(id, headers) {
        return this.client.fetch(`/admin/users/${id}`, {
            method: "DELETE",
            headers,
        });
    }
    async me(query, headers) {
        return this.client.fetch(`/admin/users/me`, {
            query,
            headers,
        });
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map