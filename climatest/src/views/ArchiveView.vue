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
                    <input type="text" class="long-input" placeholder="Search..." />
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
                    <p class="lesser-text mb-0">Type</p>
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
                <div class="col-2">
                    <p class="lesser-text mb-0">Type</p>
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
            </tr>
            <tr class="table-row">
                <td>John Doe</td>
                <td>(555) 123-4567</td>
                <td>Type 1</td>
                <td>Active</td>
                <td>Company A</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ArchiveView'
}
</script>

<style scoped></style>