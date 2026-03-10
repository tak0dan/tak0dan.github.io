// Bar Chart
document.addEventListener('DOMContentLoaded', function() {
    const barCanvas = document.getElementById('barChart');
    if (barCanvas) {
        const ctxBar = barCanvas.getContext('2d');
        const data = [120, 190, 150, 170, 140];
        const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
        const barWidth = 40;
        const spacing = 60;
        const startX = 50;
        const maxHeight = 200;
        const maxValue = Math.max(...data);

        data.forEach((value, index) => {
            const barHeight = (value / maxValue) * maxHeight;
            const x = startX + index * spacing;
            const y = 250 - barHeight;

            ctxBar.fillStyle = `hsl(${140 + index * 10}, 60%, 50%)`;
            ctxBar.fillRect(x, y, barWidth, barHeight);

            ctxBar.fillStyle = 'rgba(233, 240, 239, 0.7)';
            ctxBar.font = '12px Inter';
            ctxBar.textAlign = 'center';
            ctxBar.fillText(labels[index], x + barWidth / 2, 280);
            ctxBar.fillText(value, x + barWidth / 2, y - 5);
        });

        ctxBar.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctxBar.beginPath();
        ctxBar.moveTo(40, 250);
        ctxBar.lineTo(380, 250);
        ctxBar.stroke();
    }

    // Pie Chart
    const pieCanvas = document.getElementById('pieChart');
    if (pieCanvas) {
        const ctxPie = pieCanvas.getContext('2d');
        const pieData = [
            { label: 'A', value: 30, color: '#7ad1a2' },
            { label: 'B', value: 25, color: '#ff6a00' },
            { label: 'C', value: 20, color: '#a8f7d7' },
            { label: 'D', value: 25, color: '#4aa98f' }
        ];

        const total = pieData.reduce((sum, item) => sum + item.value, 0);
        let currentAngle = -Math.PI / 2;
        const centerX = 150;
        const centerY = 150;
        const radius = 80;

        pieData.forEach((item, index) => {
            const sliceAngle = (item.value / total) * Math.PI * 2;

            ctxPie.fillStyle = item.color;
            ctxPie.beginPath();
            ctxPie.moveTo(centerX, centerY);
            ctxPie.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            ctxPie.closePath();
            ctxPie.fill();

            ctxPie.strokeStyle = '#15131d';
            ctxPie.lineWidth = 2;
            ctxPie.stroke();

            const labelAngle = currentAngle + sliceAngle / 2;
            const labelX = centerX + Math.cos(labelAngle) * (radius * 0.65);
            const labelY = centerY + Math.sin(labelAngle) * (radius * 0.65);

            ctxPie.fillStyle = '#ffffff';
            ctxPie.font = 'bold 14px Inter';
            ctxPie.textAlign = 'center';
            ctxPie.textBaseline = 'middle';
            ctxPie.fillText(item.label, labelX, labelY);

            currentAngle += sliceAngle;
        });
    }

    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
