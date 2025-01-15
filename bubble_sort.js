

async function Bubble() {
    // Setting Time Complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    // Setting Space Complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            if (sortingStopped) {
                sortingStopped = false; // Reset the flag
                enable_buttons(); // Re-enable the buttons
                return; // Exit the sorting process
            }

            div_update(divs[j], div_sizes[j], "yellow"); // Highlight current bar

            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "red"); // Color update
                div_update(divs[j + 1], div_sizes[j + 1], "red"); // Color update

                // Swap the elements
                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                // Update heights after swapping
                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j + 1], div_sizes[j + 1], "red");
            }

            div_update(divs[j], div_sizes[j], "blue"); // Reset color
            await delay(); // Introduce a delay for visualization
        }

        div_update(divs[j], div_sizes[j], "green"); // Mark sorted element
    }

    div_update(divs[0], div_sizes[0], "green"); // Mark the last sorted element
    enable_buttons(); // Re-enable the buttons after sorting is complete
}
