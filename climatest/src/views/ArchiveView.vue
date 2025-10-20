<template>
    <div class="top-archive d-flex justify-content-space-between align-items-center position-relative">
        <div class="tools d-flex">
            <div class="input-field">
                <div class="col-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <mask id="mask0_14_860" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                            width="20" height="20">
                            <rect width="20" height="20" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_14_860)">
                            <path
                                d="M16.2852 17.1474L11.0512 11.9133C10.6346 12.2573 10.1554 12.5265 9.61374 12.721C9.07207 12.9154 8.51172 13.0126 7.9327 13.0126C6.50839 13.0126 5.30297 12.5195 4.31645 11.5333C3.32992 10.547 2.83665 9.34188 2.83665 7.91785C2.83665 6.49396 3.32978 5.2884 4.31603 4.30118C5.30228 3.3141 6.50742 2.82056 7.93145 2.82056C9.35534 2.82056 10.5609 3.31382 11.5481 4.30035C12.5352 5.28688 13.0287 6.49229 13.0287 7.9166C13.0287 8.51174 12.9289 9.08014 12.7292 9.62181C12.5293 10.1635 12.2627 10.6346 11.9294 11.0351L17.1633 16.2691L16.2852 17.1474ZM7.9327 11.7628C9.00645 11.7628 9.91589 11.3902 10.661 10.6449C11.4063 9.89979 11.7789 8.99035 11.7789 7.9166C11.7789 6.84285 11.4063 5.9334 10.661 5.18826C9.91589 4.44299 9.00645 4.07035 7.9327 4.07035C6.85895 4.07035 5.9495 4.44299 5.20436 5.18826C4.45909 5.9334 4.08645 6.84285 4.08645 7.9166C4.08645 8.99035 4.45909 9.89979 5.20436 10.6449C5.9495 11.3902 6.85895 11.7628 7.9327 11.7628Z"
                                fill="black" />
                        </g>
                    </svg>
                </div>
                <div class="col-11">
                    <input
                        v-model.trim="searchQuery"
                        type="text"
                        class="long-input"
                        placeholder="Search..."
                        @input="handleSearch"
                    />
                </div>
            </div>
            <div class="input-field">
                <div class="col-2">
                    <p class="lesser-text mb-0 tool-label">Type</p>
                </div>
                <div class="col-10">
                    <select>
                        <option value="all">All</option>
                        <option value="reports">Type 2</option>
                        <option value="messages">Type 3</option>
                        <option value="alerts">Type 4</option>
                    </select>
                </div>
            </div>
            <div class="input-field ">
                <div class="col-2">
                    <p class="lesser-text mb-0">State</p>
                </div>
                <div class="col-10">
                    <select>
                        <option value="all">All</option>
                        <option value="reports">Type 2</option>
                        <option value="messages">Type 3</option>
                        <option value="alerts">Type 4</option>
                    </select>
                </div>
            </div>
            <div class="input-field">
                <div class="col-4">
                    <p class="lesser-text mb-0">Company</p>
                </div>
                <div class="col-8">
                    <select>
                        <option value="all">All</option>
                        <option value="reports">Type 2</option>
                        <option value="messages">Type 3</option>
                        <option value="alerts">Type 4</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="button-container">
            <button class="button">
                <p class="mb-0">+</p>
                <span>Create new</span>
            </button>
        </div>
    </div>
    <div class="user-list position-relative block">
        <table class="user-table w-100">
            <tr class="table-header w-100 lesser-text">
                <th>Name</th>
                <th>Phone</th>
                <th>Type</th>
                <th>State</th>
                <th>Company</th>
                <th></th>
            </tr>
            <tbody>
                <template v-for="(user, index) in paginatedUsers" :key="user.id || user.email || index">
                    <tr class="table-row">
                        <td>
                            <div class="row-6">
                                <p>{{ user.firstName }} {{ user.lastName }}</p>
                            </div>
                            <div class="row-6">
                                <p class="lesser-text">{{ user.email }}</p>
                            </div>
                        </td>

                        <td>{{ user.phone }}</td>
                        <td>
                            <span :class="['type-badge', typeClass(user.type)]">
                                {{ user.type }}
                            </span>
                        </td>
                        <td>
                            <span :class="{ 'status-deactivated': isDeactivated(user.status) }">
                                {{ user.status }}
                            </span>
                        </td>
                        <td width="15%">
                            <div class="row-6">
                                <p>{{ user.companyName }}</p>
                            </div>
                            <div class="row-6">
                                <p class="lesser-text">{{ user.address }}</p>
                            </div>
                        </td>
                        <td width="5%">
                            <a href="#" class="unstyled">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                                    fill="none">
                                    <mask id="mask0_14_1048" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                        y="0" width="20" height="21">
                                        <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_14_1048)">
                                        <path
                                            d="M10.7885 10.5L6.9552 6.6667L7.83333 5.78857L12.5448 10.5L7.83333 15.2115L6.9552 14.3334L10.7885 10.5Z"
                                            fill="black" />
                                    </g>
                                </svg>
                            </a>
                        </td>
                    </tr>
                    <tr v-if="index < paginatedUsers.length - 1">
                        <td colspan="6">
                            <hr class="between" />
                        </td>
                    </tr>
                </template>
            </tbody>

        </table>
        
    </div>
    <div v-if="totalPages > 1" class="pagination d-flex justify-content-center align-items-center gap-8 mt-16">
            <button
                class="pagination-button arrow"
                type="button"
                :disabled="currentPage === 1"
                @click="goToPage(currentPage - 1)"
            >
                ‹
            </button>
            <template v-for="(item, index) in paginationItems" :key="`pagination-${item.type}-${item.value || index}`">
                <button
                    v-if="item.type === 'page'"
                    class="pagination-button"
                    :class="{ active: item.value === currentPage }"
                    type="button"
                    @click="goToPage(item.value)"
                >
                    {{ item.value }}
                </button>
                <span v-else class="pagination-ellipsis">…</span>
            </template>
            <button
                class="pagination-button arrow"
                type="button"
                :disabled="currentPage === totalPages"
                @click="goToPage(currentPage + 1)"
            >
                ›
            </button>
        </div>
</template>

<script>
export default {
    name: 'ArchiveView',
    data() {
        return {
            users: [],
            currentPage: 1,
            pageSize: 14,
            searchQuery: ''
        };
    },
    async mounted() {
        await this.fetchUsers();
    },
    computed: {
        paginatedUsers() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            return this.filteredUsers.slice(startIndex, startIndex + this.pageSize);
        },
        totalPages() {
            return Math.max(Math.ceil(this.filteredUsers.length / this.pageSize), 1);
        },
        paginationItems() {
            const items = [];
            if (this.totalPages <= 5) {
                for (let page = 1; page <= this.totalPages; page += 1) {
                    items.push({ type: 'page', value: page });
                }
                return items;
            }

            const addPage = (page) => {
                if (!items.some((item) => item.value === page)) {
                    items.push({ type: 'page', value: page });
                }
            };

            addPage(1);

            const start = Math.max(2, this.currentPage - 1);
            const end = Math.min(this.totalPages - 1, this.currentPage + 1);

            if (start > 2) {
                items.push({ type: 'ellipsis' });
            }

            for (let page = start; page <= end; page += 1) {
                addPage(page);
            }

            if (end < this.totalPages - 1) {
                items.push({ type: 'ellipsis' });
            }

            addPage(this.totalPages);

            return items;
        },
        filteredUsers() {
            if (!this.searchQuery) {
                return this.users;
            }

            const query = this.searchQuery.toLowerCase();

            return this.users.filter((user) => {
                const valuesToCheck = [
                    user.firstName,
                    user.lastName,
                    user.email,
                    user.phone,
                    user.type,
                    user.status,
                    user.companyName,
                    user.address
                ];

                return valuesToCheck.some((value) => {
                    if (value == null) {
                        return false;
                    }
                    return String(value).toLowerCase().includes(query);
                });
            });
        }
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await fetch('/api/users');
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                this.users = await response.json();
                this.ensurePageInRange();
            } catch (error) {
                console.error('Failed to load users', error);
            }
        },
        goToPage(page) {
            const clampedPage = Math.min(Math.max(page, 1), this.totalPages);
            this.currentPage = clampedPage;
        },
        handleSearch() {
            this.currentPage = 1;
        },
        ensurePageInRange() {
            if (this.currentPage > this.totalPages) {
                this.currentPage = this.totalPages;
            }
        },
        isDeactivated(status) {
            if (!status) {
                return false;
            }
            return String(status).trim().toLowerCase() === 'deactivated';
        },
        typeClass(type) {
            if (!type) {
                return '';
            }
            const normalized = String(type).trim().toLowerCase();
            if (normalized === 'service') {
                return 'service';
            }
            if (normalized === 'connect') {
                return 'connect';
            }
            return '';
        }
    }
}
</script>

<style scoped>

</style>