async function Merge() {
    // Setting Time Complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Setting Space Complexity
    document.getElementById("Space_Worst").innerText = "O(N)";

    c_delay = 0;

    await merge_partition(0, array_size - 1);

    if (!sortingStopped) enable_buttons(); // Enable buttons only if sorting completed
}

async function merge_sort(start, mid, end) {
    if (sortingStopped) return; // Stop sorting if flagged

    let p = start,
        q = mid + 1;
    let Arr = [],
        k = 0;

    for (let i = start; i <= end; i++) {
        if (sortingStopped) return; // Stop sorting if flagged

        if (p > mid) {
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], "red"); // Color update
        } else if (q > end) {
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "red"); // Color update
        } else if (div_sizes[p] < div_sizes[q]) {
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "red"); // Color update
        } else {
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], "red"); // Color update
        }

        await delay(); // Delay for visualization
    }

    for (let t = 0; t < k; t++) {
        if (sortingStopped) return; // Stop sorting if flagged

        div_sizes[start++] = Arr[t];
        div_update(divs[start - 1], div_sizes[start - 1], "green"); // Color update
        await delay(); // Delay for visualization
    }
}

async function merge_partition(start, end) {
    if (sortingStopped) return; // Stop sorting if flagged

    if (start < end) {
        const mid = Math.floor((start + end) / 2);
        div_update(divs[mid], div_sizes[mid], "yellow"); // Color update
        await delay(); // Delay for visualization

        await merge_partition(start, mid); // Left partition
        await merge_partition(mid + 1, end); // Right partition

        await merge_sort(start, mid, end); // Merge the two partitions
    }
}
