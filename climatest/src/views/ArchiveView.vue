<template>
    <!-- Show child route (DetailView) when present, otherwise show archive list -->
    <router-view v-if="$route.params.id" />
    
    <div v-else>
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
                    <input v-model.trim="searchQuery" type="text" class="long-input" placeholder="Search..."
                        @input="handleSearch" />
                </div>
            </div>
            <div class="input-field">
                <div class="col-2">
                    <p class="lesser-text mb-0 tool-label">Type</p>
                </div>
                <div class="col-10">
                    <select v-model="filterType" @change="handleFilterChange">
                        <option value="">All</option>
                        <option v-for="type in uniqueTypes" :key="type" :value="type">
                            {{ type.charAt(0).toUpperCase() + type.slice(1) }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="input-field ">
                <div class="col-2">
                    <p class="lesser-text mb-0">State</p>
                </div>
                <div class="col-10">
                    <select v-model="filterStatus" @change="handleFilterChange">
                        <option value="">All</option>
                        <option v-for="status in uniqueStatuses" :key="status" :value="status">
                            {{ status.charAt(0).toUpperCase() + status.slice(1) }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="input-field">
                <div class="col-4">
                    <p class="lesser-text mb-0">Company</p>
                </div>
                <div class="col-8">
                    <select v-model="filterCompany" @change="handleFilterChange">
                        <option value="">All</option>
                        <option v-for="company in uniqueCompanies" :key="company" :value="company">
                            {{ company }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="button-container create-button">
            <button class="button" type="button" @click="openModal">
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
                            <span :class="statusClasses(user.status)">
                                {{ formatStatus(user.status) }}
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
                            <router-link :to="`/archive/${user.id}`" class="unstyled">
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
                            </router-link>
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
        <button class="pagination-button arrow" type="button" :disabled="currentPage === 1"
            @click="goToPage(currentPage - 1)">
            ‹
        </button>
        <template v-for="(item, index) in paginationItems" :key="`pagination-${item.type}-${item.value || index}`">
            <button v-if="item.type === 'page'" class="pagination-button"
                :class="{ active: item.value === currentPage }" type="button" @click="goToPage(item.value)">
                {{ item.value }}
            </button>
            <span v-else class="pagination-ellipsis">…</span>
        </template>
        <button class="pagination-button arrow" type="button" :disabled="currentPage === totalPages"
            @click="goToPage(currentPage + 1)">
            ›
        </button>
    </div>
    <teleport to="body">
        <div v-if="isModalOpen" class="modal-backdrop" role="dialog" aria-modal="true" @click.self="closeModal">
            <div class="modal">
                <header class="modal-header">
                    <h2>Create User</h2>
                    <button type="button" class="modal-close" @click="closeModal" aria-label="Close">×</button>
                </header>
                <form class="modal-body" @submit.prevent="submitNewUser">
                    <div class="modal-row">
                        <label class="modal-field">
                            First Name
                            <input v-model.trim="newUser.firstName" type="text" required />
                        </label>
                        <label class="modal-field">
                            Last Name
                            <input v-model.trim="newUser.lastName" type="text" required />
                        </label>
                    </div>
                    <div class="modal-row">
                        <label class="modal-field">
                            Email
                            <input v-model.trim="newUser.email" type="email" required />
                        </label>
                        <label class="modal-field">
                            Phone
                            <input v-model.trim="newUser.phone" type="text" required />
                        </label>
                    </div>
                    <div class="modal-row">
                        <label class="modal-field">
                            Type
                            <select v-model="newUser.type" required>
                                <option value="" disabled>Select type</option>
                                <option value="service">Service</option>
                                <option value="connect">Connect</option>
                            </select>
                        </label>
                        <label class="modal-field">
                            Status
                            <select v-model="newUser.status" required>
                                <option value="" disabled>Select status</option>
                                <option value="active">Active</option>
                                <option value="deactivated">Deactivated</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </label>
                    </div>
                    <div class="modal-row">
                        <label class="modal-field">
                            Company Name
                            <input v-model.trim="newUser.companyName" type="text" required />
                        </label>
                        <label class="modal-field">
                            Address
                            <input v-model.trim="newUser.address" type="text" required />
                        </label>
                    </div>
                    <div v-if="feedbackMessage" class="modal-feedback" :class="feedbackType">
                        {{ feedbackMessage }}
                    </div>
                    <footer class="modal-footer">
                        <button type="button" class="button secondary" @click="closeModal">Cancel</button>
                        <button type="submit" class="button primary">Create</button>
                    </footer>
                </form>
            </div>
        </div>
    </teleport>
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
            searchQuery: '',
            filterType: '',
            filterStatus: '',
            filterCompany: '',
            isModalOpen: false,
            feedbackMessage: '',
            feedbackType: '', // 'success' or 'error'
            newUser: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                type: '',
                status: '',
                companyName: '',
                address: ''
            }
        };
    },
    async mounted() {
        await this.fetchUsers();
    },
    watch: {
        '$route'(to, from) {
            // Refresh the user list when returning from DetailView
            if (to.path === '/archive' && from.path.startsWith('/archive/')) {
                this.fetchUsers();
            }
        }
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
            let filtered = this.users;

            // Apply search query filter
            if (this.searchQuery) {
                const query = this.searchQuery.toLowerCase();
                filtered = filtered.filter((user) => {
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

            // Apply type filter
            if (this.filterType) {
                filtered = filtered.filter((user) => {
                    return user.type && String(user.type).toLowerCase() === this.filterType.toLowerCase();
                });
            }

            // Apply status filter
            if (this.filterStatus) {
                filtered = filtered.filter((user) => {
                    return user.status && String(user.status).toLowerCase() === this.filterStatus.toLowerCase();
                });
            }

            // Apply company filter
            if (this.filterCompany) {
                filtered = filtered.filter((user) => {
                    return user.companyName && user.companyName === this.filterCompany;
                });
            }

            return filtered;
        },
        uniqueTypes() {
            const types = this.users
                .map((user) => user.type)
                .filter((type) => type != null && String(type).trim() !== '');
            return [...new Set(types.map((type) => String(type).toLowerCase()))].sort();
        },
        uniqueStatuses() {
            const statuses = this.users
                .map((user) => user.status)
                .filter((status) => status != null && String(status).trim() !== '');
            return [...new Set(statuses.map((status) => String(status).toLowerCase()))].sort();
        },
        uniqueCompanies() {
            const companies = this.users
                .map((user) => user.companyName)
                .filter((company) => company != null && String(company).trim() !== '');
            return [...new Set(companies)].sort();
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
        handleFilterChange() {
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
            return String(status).trim() === 'deactivated';
        },
        isInActive(status) {
            if (!status) {
                return false;
            }
            return String(status).trim().toLowerCase() === 'inactive';
        },
        statusClasses(status) {
            const classes = [];
            if (this.isDeactivated(status)) {
                classes.push('status-deactivated');
            }
            if (this.isInActive(status)) {
                classes.push('status-inactive');
            }
            return classes;
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
        },
        formatStatus(status) {
            if (!status) {
                return '';
            }
            const value = String(status).trim();
            if (!value) {
                return '';
            }
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        openModal() {
            this.resetNewUser();
            this.feedbackMessage = '';
            this.feedbackType = '';
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
            this.feedbackMessage = '';
            this.feedbackType = '';
        },
        resetNewUser() {
            this.newUser = {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                type: '',
                status: '',
                companyName: '',
                address: ''
            };
        },
        async submitNewUser() {
            this.feedbackMessage = '';
            this.feedbackType = '';
            
            try {
                const response = await fetch('/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.newUser)
                });

                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                const createdUser = await response.json();
                this.users.push(createdUser);
                this.ensurePageInRange();
                this.currentPage = this.totalPages;
                
                this.feedbackMessage = 'User created successfully!';
                this.feedbackType = 'success';
                
                setTimeout(() => {
                    this.closeModal();
                }, 1500);
            } catch (error) {
                console.error('Failed to create user', error);
                this.feedbackMessage = `Failed to create user: ${error.message}`;
                this.feedbackType = 'error';
            }
        }
    }
}
</script>

<style scoped>

</style>